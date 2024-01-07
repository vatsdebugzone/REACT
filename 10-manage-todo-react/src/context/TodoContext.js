import { createContext, useContext } from "react";

//Named Export
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Morning Walk at 6 AM",
      complete: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//Named Export
export const TodoProvider = TodoContext.Provider;

//Named Export
export const useTodo = () => {
  return useContext(TodoContext);
};
