import React,{ useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(counterContext)


    return <div>
        <h1>THIS IS FIRST CHILD.</h1>
        <h2>COUNTER VALUE IS :{counterValue} </h2>
    </div>     

} 
export default Child ;