import React,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext2 from './CounterContext2';


function App() {

  let countState = useState(1);

  return (

    <CounterContext2.Provider value = {countState}>
    <div>
     <Parent/>
    </div>
    </CounterContext2.Provider>
  );
}

export default App;
