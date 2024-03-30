import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dncrement, increment } from '../Redux/action/counter.action';

function Counter(props) {
    const countervall = useSelector(state=>state.count);
    console.log(countervall);
    const dispatch= useDispatch();
    const handaleincrement = () =>{
        dispatch(increment())
    }
    const handaledncrement = () =>{
        dispatch(dncrement())
    }
    return (
        <div>
            <button  onClick={handaleincrement}>+</button>
            {countervall.counter}
            <button  onClick={handaledncrement}>-</button>

        </div>
    );
}

export default Counter;