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

}