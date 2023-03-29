import { createAction, props } from "@ngrx/store";
import { AppState } from "./prime-number.store";

export const incrCounter = createAction(
    'IncrementCounter'
);
export const decrCounter = createAction(
    'DecrementCounter'
);
export const resetCounter = createAction(
    'ResetCounter'
);
export const isThisPrimeNumber = createAction(
    'IsThisPrimeNumber'
);
export const addToFavorites = createAction(
    'AddToFavorites'
);
export const removeFromFavorites = createAction(
    'RemoveFromFavorites'
);
export const deleteFromFavorites = createAction(
    'DeleteFromFavorites',
    props<{index: number}>()
);
export const saveStore = createAction(
    'Save',
    props<{appState: AppState}>()
);
export const loadState = createAction(
    'LoadStore'
);
export const loadedStore = createAction(
    'LoadedStore',
    props<{appState: AppState}>()
);
