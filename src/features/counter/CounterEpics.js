import {ofType} from 'redux-observable'
import { mapTo, debounceTime } from 'rxjs/operators';
import {decrement} from "./CounterActions";
export const counterEpic = action$ => action$.pipe(
    ofType('INCREMENT'),
    debounceTime(2000), // Asynchronously wait 2000ms then continue.
    mapTo(decrement())
);