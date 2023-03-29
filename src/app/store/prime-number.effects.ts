import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PrimeActions } from "./Actions";
import { tap } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "./prime-number.store";


@Injectable()
export class PrimeNumberEffects {
    constructor(private actions$: Actions, 
        private router: Router, private store: Store<AppState>) {}

    primeViewNavigate$ = createEffect( 
        () => this.actions$.pipe(
            ofType(PrimeActions.isThisPrimeNumber),
            tap(() => {
                console.log('prime-view navigation');
                this.router.navigateByUrl("/prime-view");
            })
        ), {dispatch: false}
    )

    saveEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(PrimeActions.saveStore),
            tap((action) => {
                console.log('saveEffect');
                localStorage.setItem('store', JSON.stringify(action.appState))
            })
        ), {dispatch: false}
    )

    loadEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(PrimeActions.loadState),
            tap(() => {
                let loadedState = localStorage.getItem('store');
                console.log('loadedState ', loadedState);
                if (loadedState != null) {
                    console.log('loadedState dispatched: ', JSON.parse(loadedState));
                    this.store.dispatch(PrimeActions.loadedStore({appState: JSON.parse(loadedState)}))
                }
            })
        ), {dispatch: false}
    )
}