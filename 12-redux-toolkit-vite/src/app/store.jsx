import { configureStore } from "@reduxjs/toolkit";
import todoReducter from "../features/todo/todoSlice";
const store = configureStore({
  reducer: todoReducter,
});

export default store;
