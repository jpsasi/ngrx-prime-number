import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const CounterActions = createActionGroup({
    source: 'Counter',
    events: {
        'incrCounter' : emptyProps(),
        'decrCounter' : emptyProps(),
        'resetCounter': emptyProps(),
        'isThisPrimeNumber': props<{counter: number}>(),
        'saveCounter': props<{state: CounterState}>(),
        'loadCounter': emptyProps(),
        'loadedCounter': props<{state: CounterState}>(),
    }
})