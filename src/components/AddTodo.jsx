import { Button, Input, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

const AddTodo = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  function onAddHandler(e) {
    const newTodo = { id: uuidv4(), title: title, checked: false };
    setTodo([...todo, newTodo]);

    setTitle("");
    e.preventDefault();
    inputRef.current.focus();
  }

  return (
    <div>
      <div className="mb-8">
        <form>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              ref={inputRef}
              value={title}
              type="text"
              placeholder="Hey, input here :)"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button type="default" onClick={onAddHandler}>
              Add
            </Button>
          </Space.Compact>
        </form>
      </div>
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default AddTodo;
