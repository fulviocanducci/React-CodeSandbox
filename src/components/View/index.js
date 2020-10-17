import React from "react";
import { useStateContextCounterValue } from "../../contexts/Counter";

const View = () => {
  const [value] = useStateContextCounterValue();
  return <h1>{value}</h1>;
};

export default View;
