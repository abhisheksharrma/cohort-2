import { useState } from "react";
import "./App.css"

export default function App () {

  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0)

  return (
    <>
      <h1>Counter</h1>
      <div className="app">
        <p>Count is {count}</p>
        <div className="top-action">
          <button onClick={ () => setCount(count + 1) }>Increase</button>
          <button onClick={ () => 
            setCount( (count) => Math.max((count-1), 0)) 
          }>Decrease</button>
          <button onClick={ () => 
            setCount( (count) => 0 ) 
          }>Reset</button>
        </div>
        <div className="top-action">
          <input
            value={countToSet}
            onChange={ (e) => setCountToSet(Number(e.target.value)) } 
            type="text" 
          />
          <button onClick={ () => {
            setCount(Number(countToSet));
            setCountToSet(0);
          }}>Set to {countToSet}</button>
        </div>
      </div>
    </>
  )
}