import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodoList } from "./components/IncompleteTodoList";
import { CompletedTodoList } from "./components/CompletedTodoList";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodoList, setIncompleteTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const onChangeInputText = (event) => setInputText(event.target.value);

  const onClickAdd = () => {
    if (inputText === "") {
      alert("TODOを入力してください。");
      return;
    }
    const newTodoList = [...incompleteTodoList, inputText];
    setIncompleteTodoList(newTodoList);
    setInputText("");
  };

  const onClickDelete = (index) => {
    const newTodoList = [...incompleteTodoList];
    newTodoList.splice(index, 1);
    setIncompleteTodoList(newTodoList);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodoList = [...incompleteTodoList];
    newIncompleteTodoList.splice(index, 1);
    setIncompleteTodoList(newIncompleteTodoList);

    const newCompletedTodoList = [
      ...completedTodoList,
      incompleteTodoList[index]
    ];
    setCompletedTodoList(newCompletedTodoList);
  };

  const onClickBack = (index) => {
    const newCompletedTodoList = [...completedTodoList];
    newCompletedTodoList.splice(index, 1);
    setCompletedTodoList(newCompletedTodoList);

    const newIncompleteTodoList = [
      ...incompleteTodoList,
      completedTodoList[index]
    ];
    setIncompleteTodoList(newIncompleteTodoList);
  };

  return (
    <>
      <InputTodo
        inputText={inputText}
        onChange={onChangeInputText}
        onClick={onClickAdd}
        disabled={incompleteTodoList.length >= 5}
      />
      {incompleteTodoList.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです</p>
      )}
      <IncompleteTodoList
        todoList={incompleteTodoList}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompletedTodoList
        todoList={completedTodoList}
        onClickBack={onClickBack}
      />
    </>
  );
};
