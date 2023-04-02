import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const selectCounter = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(selectCounter,
    (state) => state.counter);