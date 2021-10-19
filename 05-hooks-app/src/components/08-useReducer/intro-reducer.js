const initialState = [{ id: 1, todo: "Comprar pan", done: false }];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "AddTodo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = { id: 2, todo: "Comprar leche", done: false };
const addTodoAction = {
  type: "AddTodo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log(todos);
