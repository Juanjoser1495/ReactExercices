import { useEffect, useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

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

  const handleAddTodo = (newTodo) => {
    dispatch({ type: "Add", payload: newTodo });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <TodoList
              todos={todos}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          </div>
          <div className="col-5">
            <TodoAdd handleAddTodo={handleAddTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};
