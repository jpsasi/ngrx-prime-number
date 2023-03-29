import { createReducer, on } from "@ngrx/store";
import { ActivityAction, initialState } from "./prime-number.store";
import { PrimeActions } from "./Actions";

export const primeNumberReducer = createReducer(
    initialState,
    on(PrimeActions.incrCounter, (state) => {
        console.log('incrCounter reducer');
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(PrimeActions.decrCounter, (state) => {
        console.log('DecrCounter reducer');
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(PrimeActions.resetCounter, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(PrimeActions.addToFavorites, (state) => {
        return {
            ...state,
            favorites: [state.counter, ...state.favorites],
            activities: [...state.activities, 
                { counter: state.counter, action: ActivityAction.add}]
        }
    }),
    on(PrimeActions.removeFromFavorites, (state) => {
        let favorites = Object.assign([], state.favorites);
        favorites.splice(favorites.indexOf(state.counter), 1);
        return {
            ...state,
            favorites: favorites,
            activities: [...state.activities, {
                counter: state.counter, action: ActivityAction.delete
            }]
        }
    }),
    on(PrimeActions.deleteFromFavorites, (state, action) => {
        let favorites = Object.assign([], state.favorites);
        let toBeDeletedPrime = favorites[action.index];
        favorites.splice(action.index, 1);
        return {
            ...state,
            favorites: favorites,
            activities: [...state.activities, {
                counter: toBeDeletedPrime, action: ActivityAction.delete
            }]
        }
    }),
    on(PrimeActions.loadedStore, (state, action) => {
        return action.appState
    })

);