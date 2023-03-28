import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./prime-number.store";

export const selectPrimeNumberSelector = createFeatureSelector<AppState>('prime_number');

export const getCounter = createSelector(
    selectPrimeNumberSelector,
    (state) => state.counter
);