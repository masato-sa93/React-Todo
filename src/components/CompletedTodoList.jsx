import React from "react";

export const CompletedTodoList = (props) => {
  const { todoList, onClickBack } = props;
  return (
    <>
      <div className="completed-area">
        <p className="title">完了のTODO</p>
        <ul id="completed-list">
          {todoList.map((todo, index) => {
            return (
              <li>
                <div key={todo} className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
