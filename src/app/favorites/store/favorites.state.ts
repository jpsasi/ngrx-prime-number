export interface Activity {
    counter: number
    action: ActivityAction
}

export enum ActivityAction {
    add = 'Add',
    delete = 'Delete'
}

export interface FavoritesState {
    favorites: number[];
    activities: Activity[];
}

export const initialState: FavoritesState = {
    favorites : [],
    activities: []
}