import { Button, Input, Space } from "antd";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// 투두리스트를 투두리스트 컴포넌트에 추가해주는 컴포넌트
const AddTodo = () => {
  const [todo, setTodo] = useState([
    { id: uuidv4(), title: "todolist를 만들자1", checked: false },
    { id: uuidv4(), title: "todolist를 만들자2", checked: false },
    { id: uuidv4(), title: "todolist를 만들자3", checked: false },
  ]);
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  function onAddHandler() {
    const newTodo = { id: uuidv4(), title: title, checked: false };
    setTodo([...todo, newTodo]);

    setTitle("");
    inputRef.current.focus();
  }
  console.log("todo", todo);

  return (
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
  );
};

export default AddTodo;
