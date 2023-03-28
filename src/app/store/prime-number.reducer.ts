import { createReducer, on } from "@ngrx/store";
import { initialState } from "./prime-number.store";
import { PrimeActions } from "./Actions";

export const primeNumberReducer = createReducer(
    initialState,
    on(PrimeActions.incrCounter, (state,action) => {
        console.log('incrCounter reducer');
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(PrimeActions.decrCounter, (state, action) => {
        console.log('DecrCounter reducer');
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(PrimeActions.resetCounter, (state, action) => {
        return {
            counter: 0
        }
    })
);