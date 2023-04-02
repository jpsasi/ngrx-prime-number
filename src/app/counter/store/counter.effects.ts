import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CounterActions } from "./counter.actions";
import { tap } from "rxjs";
import { CounterState } from "./counter.state";
import { Store } from "@ngrx/store";

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions, private router: Router,
        private store: Store<CounterState>) {}

    primeViewNavigate$ = createEffect(
        () => this.actions$.pipe(
            ofType(CounterActions.isthisprimenumber),
            tap((action) => {
                console.log('counter effect action');
                this.router.navigateByUrl("/prime-view");
            })
        ), {dispatch: false}
    );

    saveCounter$ = createEffect(
        () => this.actions$.pipe(
            ofType(CounterActions.savecounter),
            tap((action) => {
                console.log('counter save effect', action.state);
                localStorage.setItem('counter', JSON.stringify(action.state));
            })
        ), {dispatch: false}
    );

    loadCounter$ = createEffect(
        () => this.actions$.pipe(
            ofType(CounterActions.loadcounter),
            tap(() => {
                let counter = localStorage.getItem('counter');
                let counterState: CounterState = counter != null ? JSON.parse(counter) : { counter: 0};                
                console.log('counter loaded ', counterState);
                this.store.dispatch(CounterActions.loadedcounter({state: counterState}));
            })
        )
    )
}