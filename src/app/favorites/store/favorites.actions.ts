import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { FavoritesState } from "./favorites.state";

export const FavoritesActions = createActionGroup({
    source: 'Favorites',
    events: {
        'addToFavorites': props<{counter: number}>(),
        'removeFromFavorites' : props<{counter: number}>(),
        'deleteFromFavorites' : props<{index: number}>(),
        'saveFavorites' : props<{state: FavoritesState}>(),
        'loadFavorites' : emptyProps(),
        'loadedFavorites': props<{state: FavoritesState}>(),
    }
})