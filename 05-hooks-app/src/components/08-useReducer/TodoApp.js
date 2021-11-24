import { useEffect, useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

export const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = { type: "Delete", payload: todoId };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = { type: "Toggle", payload: todoId };
    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "Add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };
  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <ul className="list-group list-group-flush">
              {todos.map((todo, i) => {
                return (
                  <li key={todo.id} className="list-group-item">
                    <p
                      className={`${todo.done && "complete"}`}
                      onClick={() => {
                        handleToggle(todo.id);
                      }}
                    >
                      {i + 1}. {todo.desc}
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Borrar
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-5">
            <h4>Agregar Todo</h4>
            <hr />
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Aprender..."
                autoComplete="off"
                onChange={handleInputChange}
                value={description}
              ></input>
              <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
