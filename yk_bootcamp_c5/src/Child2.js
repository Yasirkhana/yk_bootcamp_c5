import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReducer,10);
    console.log(state);
    return (
        <div>
            <h3>Value Of reducer start is : {state}</h3>
            <button onClick = {() => dispatch('INCREMENT')} >Increament Reducer</button>
        </div>
    )
}
export default Child2;