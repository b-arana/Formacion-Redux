import 'rxjs';
import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import { TestScheduler } from 'rxjs/testing';


import {counterEpic}  from './CounterEpics';
import * as actions from './CounterActions'

const deepEquals = (actual, expected) =>
    expect(actual).toEqual(expected);

const createTestScheduler = () =>
    new TestScheduler(deepEquals);

test('it should return success', () => {
    const marbles1 = '-a|';
    const marbles2 = '--(b|)';
    const values = {
        a: actions.increment(),
        b: actions.decrement()
    };

    const ts = createTestScheduler();
    const source = ActionsObservable.from(
        ts.createColdObservable(marbles1, values)
    );
    const actual = counterEpic(source);
    ts.expectObservable(actual).toBe(marbles2, values);
    ts.flush();
});