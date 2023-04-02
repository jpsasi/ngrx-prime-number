import { createReducer, on } from "@ngrx/store";
import { initialCounterState } from "./counter.state";
import { CounterActions } from "./counter.actions";

export const counterReducer = createReducer(
    initialCounterState,
    on(CounterActions.incrcounter, (state) => {
        return {
            counter: state.counter + 1
        }
    }),
    on(CounterActions.decrcounter, (state) => {
        return {
            counter: state.counter - 1
        }
    }),
    on(CounterActions.resetcounter, (state) => {
        return {
            counter: 0
        }
    }),
    on(CounterActions.loadedcounter, (state, action) => {
        return action.state
    })
)