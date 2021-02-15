import React,{useState} from 'react';
import './App.css';

function App() {
  let [count,setCount]=useState(1)
  return(
    <div>
      <h1>Hello World</h1>
      <h3>the value of count: {count}</h3>
      <button onClick={
        ()=>setCount(count+1)

      }>Update Count</button>

    </div>
  )
}

export default App;