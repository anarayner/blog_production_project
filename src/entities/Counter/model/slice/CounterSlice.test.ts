import { counterActions, counterReducer } from 'entities/Counter/model/slice/CounterSlice';
import { CounterSchema } from 'entities/Counter';

describe('CounterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: CounterSchema = {
            value: 7,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 8 });
    });

    test('state undefined', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
