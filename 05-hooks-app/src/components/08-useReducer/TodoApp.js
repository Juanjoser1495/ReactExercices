import { useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {
  const initialState = [
    { id: new Date().getTime(), desc: "Aprender React", done: false },
  ];
  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr></hr>
      <div className="container">
        <div classname="row">
          <div className="col">
            <ul className="list-group list-group-flush">
              {todos.map((todo, i) => {
                return (
                  <li key={todo.id} className="list-group-item">
                    <p>
                      {i + 1}. {todo.desc}
                    </p>
                    <button className="btn btn-danger">Borrar</button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h4>Agregar Todo</h4>
            <hr />
            <form>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Aprender..."
                autoComplete="off"
              ></input>
              <button className="btn btn-outline-primary mt-1 btn-block">
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
