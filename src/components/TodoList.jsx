import { List, Typography } from "antd";
import React from "react";

// 투두리스트를 보여주는 곳
const TodoList = () => {
  const todoMockup = [
    { id: 1, title: "todolist add 기능", completed: true },
    { id: 2, title: "todolist delete 기능", completed: false },
    { id: 3, title: "todolist check 기능", completed: true },
    { id: 3, title: "todolist modify 기능", completed: true },
  ];

  const todoTitle = todoMockup.map((obj) => obj.title);

  return (
    <List
      bordered
      dataSource={todoTitle}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>{item}</Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
