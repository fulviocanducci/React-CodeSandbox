import React from "react";
import { useStateContextCounterHandle } from "../../contexts/Counter";

const Operation = () => {
  const [handleIncrement, handleDecrement] = useStateContextCounterHandle();
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Operation;
