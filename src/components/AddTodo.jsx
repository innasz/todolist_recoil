import { Button, Input, Space } from "antd";
import React, { useRef, useState } from "react";

// 투두리스트를 투두리스트 컴포넌트에 추가해주는 컴포넌트
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const inputRef = useRef(null);

  function clickModifyButton() {
    setTodo("");
    if (inputRef.current !== null) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  }

  function onChangeHandler(e) {
    setTodo(e.target.value);
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
          <Button type="default" onClick={clickModifyButton}>
            Add
          </Button>
        </Space.Compact>
      </form>
    </div>
  );
};

export default AddTodo;
