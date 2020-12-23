import React,{ useContext } from 'react';
import CounterContext2 from './CounterContext2';

const Child = () => {

    let counterValue = useContext(CounterContext2)
    console.log(counterValue);

    return <div>
        <h1>THIS IS FIRST CHILD.</h1>
        <h2>COUNTER 2 VALUE IS : {counterValue[0]} </h2>
        <button onClick={ ()=> {counterValue[1](++counterValue[0])}}>INCREAMENT</button>
    </div>     

} 
export default Child ;