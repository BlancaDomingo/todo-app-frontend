import TodoItem from "./TodoItem";

// onButton={goToReducer}
const TodoList = ({ todos, toggleTodo, deleteTodo, greenOn }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <TodoItem
          todo={todo}
          key={i}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          greenOn={greenOn}
        />
      ))}
    </div>
  );
};

export default TodoList;
