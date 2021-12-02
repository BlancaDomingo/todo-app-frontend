import TodoItem from "./TodoItem";


// props = {todos: Array}
const TodoList = (props) => {
  /*   const taskArr = ['coser', 'lavar', 'cantar'] */

 /*    if(props.checked === false){
        return null;
    }
    else{
        return (
			<div className="alert alert-danger" role="alert">
				This is a primary alert-check it out!
			</div>
		);
    } */
   
    return (
    <div>
       {/*  {taskArr.map((item, i) => {
            return <TodoItem task={item} id={i}/> 
        })} */}
        {props.todos.map(todo => (<TodoItem todo={todo} />))}
           

    </div>
    );
    
    
  
}

export default TodoList;

