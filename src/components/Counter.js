import React from "react";
import { useState } from "react";

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);

  const Increament = () => {
    setCount(count + 1);
  };

  const Decreament = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increament}>Increase</button>
      <button onClick={Decreament}>Decrease</button>
    </div>
  );
}

export default Counter;
