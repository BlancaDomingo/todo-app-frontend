import "./TodosPage.scss";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAllTodos,
  addTodoToDataBase,
  toggleDoneToDataBase,
  deleteTodoFromDataBase,
} from "../functions/DatabaseFunctions";

function TodosPage({ token, userId }) {
  const [todos, setTodos] = useState([]);

  function createTodo(payload) {
    addTodoToDataBase(payload, token, userId).then((res) => {
      if (res.message === "success") {
        setTodos(res.data);
      }
    });
  }

  function toggleTodo(todoId) {
    toggleDoneToDataBase(todoId, token, userId).then((res) => {
      if (res.message === "success") {
        setTodos(res.data);
      }
    });
  }

  function deleteTodo(todoId) {
    deleteTodoFromDataBase(todoId, token, userId).then((res) => {
      if (res.message === "success") {
        setTodos(res.data);
      }
    });
  }

  useEffect(() => {
    getAllTodos(token, userId).then((res) => {
      if (res.message === "success") {
        setTodos(res.data);
      }
    });
  }, []);

  return (
    <>
      <TodoInput onButton={createTodo} />

      {todos.length > 0 && <h2>Todo</h2>}
      <TodoList
        todos={todos.filter((todo) => !todo.done)}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        greenOn={false}
      />

      {todos.length > 0 && <hr />}
      {todos.length > 0 && <h2>Erledigt</h2>}
      <TodoList
        todos={todos.filter((todo) => todo.done)}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        greenOn={true}
      />

      <Link className="linkHelp" to="/todoApp/Hilfe">
        Hilfe ?
      </Link>
    </>
  );
}

export default TodosPage;

/* git remote add origin https://github.com/BlancaDomingo/todo-app.git */
