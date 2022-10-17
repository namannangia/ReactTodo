import React from "react";

export default function Todolist(props) {
  const completeTodo = props.completeTodo;
  const deleteTodo = props.deleteTodo;
  let todoArr =
    props.todoArr.length > 0
      ? props.todoArr
      : JSON.parse(localStorage.getItem("todos"));

  return (
    <div className="todo-list">
      <ul>
        {todoArr && todoArr.length > 0
          ? todoArr.map((el, i) => (
              <li key={i}>
                <div className={el["done"] ? "line-through title" : "title"}>
                  {el.title}
                </div>
                <div className="icon">
                  <i
                    title="Complete"
                    onClick={() => completeTodo(i)}
                    className="fas fa-check-circle pointer"
                  />
                  <i
                    title="Delete"
                    onClick={() => deleteTodo(i)}
                    className="fas fa-trash-alt pointer"
                  />
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
