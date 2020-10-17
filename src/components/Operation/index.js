import React from "react";
import { useStateContextCounter } from "../../contexts/Counter";

const Operation = () => {
  const [value, handleIncrement, handleDecrement] = useStateContextCounter();
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Operation;
