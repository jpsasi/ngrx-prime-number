import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FavoritesActions } from "./favorites.actions";
import { Observable, Subject, concatMap, tap } from "rxjs";
import { FavoritesState } from "./favorites.state";
import { Store } from "@ngrx/store";

@Injectable()
export class FavoritesEffects {

    constructor(private actions$: Actions, private store: Store<FavoritesState>) {}

    saveFavorites$ = createEffect(
        () => this.actions$.pipe(
            ofType(FavoritesActions.savefavorites),
            tap((action) => {
                console.log('saving favorites', action.state);
                localStorage.setItem('favorites', JSON.stringify(action.state));
            })
        ), {dispatch: false}
    );

    loadFavorites$ = createEffect(
        () => this.actions$.pipe(
            ofType(FavoritesActions.loadfavorites),
            tap(() => {
                let favorites = localStorage.getItem('favorites');
                let favoritesState: FavoritesState = favorites != null ? JSON.parse(favorites) : { counter: 0};                
                console.log('counter loaded ', favoritesState);
                this.store.dispatch(FavoritesActions.loadedfavorites({state: favoritesState}));
            })
        ), {dispatch: false}
    )
}