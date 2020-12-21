
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';


function App() {
  return (
    <CounterContext.Provider value = {20}>
    <div>
     <Parent/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
