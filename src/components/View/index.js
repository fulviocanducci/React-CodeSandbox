import React from "react";
import { useStateContextCounter } from "../../contexts/Counter";

const View = () => {
  const [value] = useStateContextCounter();
  return <h1>{value}</h1>;
};

export default View;
