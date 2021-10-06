import { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { state: counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => {
    procesoPesado(counter);
  }, [counter]);
  return (
    <div>
      <h1>Memo hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr></hr>

      <p>{memoProcesoPesado}</p>
      <button
        onClick={() => {
          increment(1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
