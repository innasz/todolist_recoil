import { DeleteOutlined } from "@ant-design/icons";
import { List, Typography } from "antd";
import React from "react";

// 투두리스트를 보여주는 곳
const TodoList = ({ todo, setTodo }) => {
  // 삭제 기능
  function onDeleteHandler() {
    // return console.log("todoTitle", todoTitle);
  }

  // 토글 추가

  return (
    <List
      bordered
      dataSource={todo?.map((todo) => todo.title)}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
          <DeleteOutlined
            className="cursor-pointer"
            onClick={onDeleteHandler}
          />
        </List.Item>
      )}
    />
  );
};

export default TodoList;
