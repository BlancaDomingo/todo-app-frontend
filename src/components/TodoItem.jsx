const TodoItem = ({ todo, toggleTodo, deleteTodo, greenOn }) => {
  const handleChange = (e) => {
    e.preventDefault();
    toggleTodo(todo._id);
  };

  const deleteTask = (e) => {
    deleteTodo(todo._id);
  };

  return (
    <div className="item">
      <div
        onClick={handleChange}
        className={greenOn ? "check checkHover" : "check"}
      >
        ✔
      </div>

      {/* <input className="check" type="checkbox" id="myCheck" 
          onClick={handleChange}></input>  */}
      <div className="label">
        <p className="labelTitel">{todo.text}</p>
        {/* <label  htmlFor="myCheck">{todo.text} </label> */}
        <span className={todo.remember ? "showInLabel" : "noShowInLabel"}>
          <i className="fa fa-bell"></i>
        </span>
        {/*  <span>&nbsp;&middot;&nbsp;</span> */}
        <span className={todo.repeat ? "showInLabel" : "noShowInLabel"}>
          &nbsp;&middot;&nbsp;<i className="fa fa-retweet"></i>
        </span>
        {/* <span>&nbsp;&middot;&nbsp;</span> */}
        <span className={todo.date ? "showInLabel" : "noShowInLabel"}>
          &nbsp;&middot;&nbsp;<i className="fa fa-calendar"></i>&nbsp;
          {todo.date}
        </span>
      </div>
      <p className="buttonX" onClick={deleteTask}>
        ✘
      </p>
    </div>
  );
};

export default TodoItem;
