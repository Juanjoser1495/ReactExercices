import PropTypes from "prop-types";

const PrimeraApp = ({ saludo }) => {
  const saludo2 = "Hola Mundo const";

  return (
    <>
      <h1>{saludo2}</h1>
      <h2>{saludo}</h2>
      <p>Mi primera app</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
