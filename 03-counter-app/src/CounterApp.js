import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //handleAdd
  const handleAdd = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button
        onClick={(e) => {
          handleAdd(e);
        }}
      >
        +1
      </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
