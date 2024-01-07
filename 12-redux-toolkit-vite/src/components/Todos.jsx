import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const disptach = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="flex flex-wrap gap-y-3">
        {/*Loop and Add TodoItem here */}
        {todos &&
          todos.map((todo) => (
            <div key={todo?.id}  className={`w-full flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black`}>
              <div className="w-full text-white "> {todo?.text}</div>
              <div>
                <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                  onClick={() => disptach(removeTodo(todo.id))}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todos;
