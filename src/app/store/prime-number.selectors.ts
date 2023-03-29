import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./prime-number.store";

export const selectPrimeNumberSelector = createFeatureSelector<AppState>('prime_number');

export const getAppState = createSelector(
    selectPrimeNumberSelector,
    (state) => state
)

export const getCounter = createSelector(
    selectPrimeNumberSelector,
    (state) => state.counter
);

export const getFavorites = createSelector(
    selectPrimeNumberSelector,
    (state) => { 
        console.log('getFavorites ', state);
        return state.favorites; }
);

export const getActivities = createSelector(
    selectPrimeNumberSelector,
    (state) => state.activities
)