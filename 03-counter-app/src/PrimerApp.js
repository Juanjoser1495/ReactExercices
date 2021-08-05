import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  const saludo2 = "Hola Mundo const";

  return (
    <>
      <h1>{saludo2}</h1>
      <h2>{saludo}</h2>
      <h3>{subtitulo}</h3>
      <p>Mi primera app</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
