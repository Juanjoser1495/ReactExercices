import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  //handleAdd
  const handleAdd = (e) => {
    console.log(e);
  };

  //handleAdd use State
  const handleAddState = () => {
    setCounter(counter + 1);
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
      <button
        onClick={(e) => {
          handleAddState(e);
        }}
      >
        +1 use state
      </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
