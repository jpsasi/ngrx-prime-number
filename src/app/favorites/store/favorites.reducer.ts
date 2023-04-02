import { createReducer, on } from "@ngrx/store";
import { Activity, ActivityAction, initialState } from "./favorites.state";
import { FavoritesActions } from "./favorites.actions";

export const favoritesReducer = createReducer(
    initialState,
    on(FavoritesActions.addtofavorites, (state, action) => {
        let activity: Activity = {
            counter: action.counter,
            action: ActivityAction.add
        }
        return {
            favorites: [...state.favorites, action.counter],
            activities:[...state.activities, activity]
        }
    }),
    on(FavoritesActions.removefromfavorites, (state, action) => {
        let favorites = Object.assign([], state.favorites);
        favorites.splice(favorites.indexOf(action.counter), 1);
        let activity: Activity = {
            counter: action.counter,
            action: ActivityAction.delete
        }
        return {
            ...state,
            favorites: favorites,
            activities: [...state.activities, activity]
        }
    }),
    on(FavoritesActions.deletefromfavorites, (state, action) => {
        let favorites = Object.assign([], state.favorites);
        let value = state.favorites[action.index];
        favorites.splice(action.index, 1);
        let activity: Activity = {
            counter: value,
            action: ActivityAction.delete
        }
        return {
            ...state,
            favorites: favorites,
            activities: [...state.activities, activity]
        }
    }),
    on(FavoritesActions.loadedfavorites, (state, action) => {
        return action.state
    }),
)