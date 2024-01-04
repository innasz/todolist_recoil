import React from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoTemplate = () => {
  return (
    <div className="flex w-full h-screen justify-center bg-indigo-950">
      <div className="w-[500px] bg-white px-10 border-8 rounded-3xl border-black">
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoTemplate;
