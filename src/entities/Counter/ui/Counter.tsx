import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">value ={counterValue}</h1>
            <Button data-testid="decrement-btn" onClick={decrement}>
                inc
            </Button>
            <Button data-testid="increment-btn" onClick={increment}>
                dec
            </Button>
        </div>
    );
};
