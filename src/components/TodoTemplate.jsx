import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

const TodoTemplate = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-indigo-950">
      <div className="w-[500px] h-5/6 bg-white px-10 border-8 rounded-3xl border-black ">
        <Header />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoTemplate;
