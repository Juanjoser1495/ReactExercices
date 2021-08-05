const PrimeraApp = (props) => {
  const saludo = "Hola Mundo const";

  console.log(props);
  return (
    <>
      <h1>{saludo}</h1>
      <h2>{props.saludo}</h2>
      <p>Mi primera app</p>
    </>
  );
};

export default PrimeraApp;
