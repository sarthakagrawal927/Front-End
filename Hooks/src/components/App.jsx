import React, { useState } from "react";

function App() {
  const [count , setCount] = useState(0);  //initial state sent in bracket //array
//destructuring
  //console.log(state[0]);
  function increase(){
    setCount(count+1); //setCount is a function
  }

  function decrease(){
    setCount(count-1);
  }

  function mul2(){
    setCount(count*2); //just to check the limits
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={mul2}>*2</button>
    </div>
  );
}

export default App;
