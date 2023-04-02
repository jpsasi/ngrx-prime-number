import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoritesState } from "./favorites.state";

const selectFavorites = createFeatureSelector<FavoritesState>('favorites');

export const getFavoritesState = createSelector(
    selectFavorites,
    (state) => state
);
export const getFavorites = createSelector(
    selectFavorites,
    (state) => state.favorites
);
export const getActivities = createSelector(
    selectFavorites,
    (state) => state.activities
)