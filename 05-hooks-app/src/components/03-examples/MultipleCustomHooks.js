import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);
  const { loading, data, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breakng bad Quotes</h1>
      <hr></hr>
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente quote
      </button>
    </div>
  );
};
