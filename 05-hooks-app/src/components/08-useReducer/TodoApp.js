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
      <h1>TodoApp</h1>
      <hr></hr>
      <ul>
        {todos.map((todo) => {
          return <li>{todo.id}</li>;
        })}
        <li>Hola</li>
        <li>Mundo</li>
      </ul>
    </div>
  );
};
