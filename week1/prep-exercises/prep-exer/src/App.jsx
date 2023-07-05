import './App.css';
import React from 'react';
import {useState} from "react";


const ButtonAdd = ({count, setCount}) => {
  const handleClick = () => {
    setCount(count + 1)};

  return (
    <button
    type='button'
    onClick={handleClick}
    >Add</button>
  )
}


const Counter = () => {
  
  const [count, setCount] = useState(0);

  const Reset = () => {
    setCount(0);
  } 

  const feedback = count>10 ? <p>It's higher than 10!</p> : <p>Keep counting...</p>
  
  return (
    <div className="App">
     <h1>{count}</h1>
     <ButtonAdd count={count} setCount={setCount} />
     {feedback}
     <button onClick={Reset}>Reset</button>
     </div>
  );
}

export default Counter;
