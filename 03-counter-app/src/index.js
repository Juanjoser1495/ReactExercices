import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimerApp";
import "./index.css";

const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimeraApp saludo="Hola, soy goku" />, divRoot);
