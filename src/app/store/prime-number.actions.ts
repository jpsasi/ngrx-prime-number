import { createAction } from "@ngrx/store";

export const incrCounter = createAction(
    'IncrementCounter'
);
export const decrCounter = createAction(
    'DecrementCounter'
);
export const resetCounter = createAction(
    'ResetCounter'
)