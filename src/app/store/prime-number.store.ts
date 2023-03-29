export interface AppState {
    counter: number;
    favorites: number[];
    activities: Activity[];
}

export interface Activity {
    counter: number
    action: ActivityAction
}

export enum ActivityAction {
    add = 'Add',
    delete = 'Delete'
}

export const initialState: AppState = {
    counter: 0,
    favorites: [],
    activities: []
}