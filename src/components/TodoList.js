import TodoItem from "./TodoItem";

// onButton={goToReducer}
const TodoList = ({ todos, toggleTodo, deleteTodo, greenOn }) => {
  console.log("props.todos", todos);

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
