import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleAdd = (e) => {
    console.log(e);
  };

  //handleAdd use State
  const handleAddState = () => {
    setCounter(counter + 1);
  };

  //handle Reset
  const handleReset = () => setCounter(value);
  //handle substract
  const handleSubstract = () => {
    setCounter((c) => {
      return c - 1;
    });
  };

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <h3>{counter}</h3>
      <button
        onClick={(e) => {
          handleAdd(e);
        }}
      >
        +1
      </button>
      <button onClick={handleAddState}>+1 use state</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1 use state</button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
