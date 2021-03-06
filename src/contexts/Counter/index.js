import React from "react";

export const CounterContext = React.createContext();

export default function CounterProvider({ children }) {
  const [value, setValue] = React.useState(0);
  return (
    <CounterContext.Provider value={{ value, setValue }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useStateContextCounterHandle = () => {
  const context = React.useContext(CounterContext);
  const { setValue } = context;
  const handleIncrement = () => setValue((state) => state + 1);
  const handleDecrement = () => setValue((state) => state - 1);
  return [handleIncrement, handleDecrement];
};

export const useStateContextCounterValue = () => {
  const context = React.useContext(CounterContext);
  const { value } = context;
  return [value];
};
