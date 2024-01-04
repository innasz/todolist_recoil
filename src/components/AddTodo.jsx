import { Button, Form, Input, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";

// 투두리스트를 투두리스트 컴포넌트에 추가해주는 컴포넌트
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);

  function onChangeHandler(e) {
    setTodo(e.target.value);
  }

  function onClickAddButton() {
    setTodo("");
    inputRef.current.focus();
  }

  return (
    <div className="mb-8">
      <form>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            ref={inputRef}
            type="text"
            value={todo}
            placeholder="Hey, input here :)"
            onChange={onChangeHandler}
          />
          <Button type="default" onClick={onClickAddButton}>
            Add
          </Button>
        </Space.Compact>
      </form>
    </div>
  );
};

export default AddTodo;
