import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// redux store와 연동되는 Counter 컴포넌트!
const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()),[dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    
    return (<Counter 
        number={number} 
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        />);
};

export default CounterContainer;