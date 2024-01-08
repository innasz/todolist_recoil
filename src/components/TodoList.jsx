import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
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

  function onDeleteHandler(deleted) {
    setTodo(todo.filter((item) => item.id !== deleted.id));
  }

  function onToggleHandler(checked) {
    setTodo((prev) => {
      return prev.map((todo) => ({
        ...todo,
        checked: todo.id === checked.id ? !checked.checked : todo.checked,
      }));
    });
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
      {todo?.map((item) => (
        <div className="flex" key={item.id}>
          <input type="checkbox" onChange={() => onToggleHandler(item)} />
          <li className="list-none">{item.title}</li>
          <DeleteOutlined
            className="cursor-pointer"
            onClick={() => onDeleteHandler(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
