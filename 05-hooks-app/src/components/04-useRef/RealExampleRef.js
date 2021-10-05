import { useState } from "react";
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Real Example REf</h1>
      <hr></hr>

      {show && <MultipleCustomHooks></MultipleCustomHooks>}
      <button
        className="btn btn-primary mt5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
