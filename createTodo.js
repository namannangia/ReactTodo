import React, { useState } from "react";
import swal from "sweetalert";
import Todolist from "./Todolist";

export default function CreateTodo() {
  const [todo, setTodo] = useState({ title: "", done: false });
  const [todoArr, setTodoArr] = useState([]);

  let todos = localStorage.hasOwnProperty("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const onChange = (event) => {
    let { value } = event.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    setTodo(obj);
  };
  const createTodo = (event) => {
    const { name } = event.target;
    if (event.key === "Enter" || name === "addTodo")
      if (todo.title !== "") {
        todos.unshift(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodo({ title: "", done: false });
      } else {
        swal("Oops", "Please write todo first", "error");
      }
  };

  const completeTodo = (i) => {
    if (todos[i]["done"] !== true) {
      todos[i]["done"] = true;
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodoArr(todos);
      swal("Good Job!", "Todo Completed", "success");
    }
  };

  const deleteTodo = (i) => {
    swal({
      title: "Are you sure",
      text: "Once delelted, You will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      if (res) {
        todos.splice(i, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodoArr(todos);
      }
    });
  };

  return (
    <>
      <div className="box">
        <div className="text-end">
          <h1>React To-Do app</h1>
          <h5>Add a new to-do</h5>
        </div>
        <div>
          <input
            type={"text"}
            name="todo"
            value={todo.title}
            onKeyPress={createTodo}
            placeholder="Write task here"
            onChange={onChange}
          />
          <button
            type="button"
            onClick={createTodo}
            className="btn-addTodo"
            name="addTodo"
          >
            Add Todo
          </button>
        </div>
      </div>
      <Todolist
        todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
