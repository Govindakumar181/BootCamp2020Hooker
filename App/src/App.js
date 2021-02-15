import React,{useState} from 'react';
import Msg from './Message.js';
import './App.css';

function App() {
  let [count,setCount]=useState(1)
  let [isMorning,setMorning]=useState(true)
  return(
    <div className={isMorning ? 'box' : 'Night' }>
      <h1>Hello World</h1>
      <h3>Time = { isMorning ? 'Morning' : 'Night' }</h3>
      <Msg counter={count} />
      <button onClick={
        ()=>setCount(count+1)
      }>Update Count</button>
      <button onClick={
        ()=>setMorning(!isMorning)
      }>Update Day</button>
    </div>
  );
}

export default App;