import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
    //addto Store (It can be done by dispatch)
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={todo}
        className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        placeholder="Write Todo......"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
