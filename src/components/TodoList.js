import TodoItem from "./TodoItem";

const TodoList = () => {
    const taskArr = ['coser', 'lavar', 'cantar']

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
   
    return (<div>
        {taskArr.map((item, i) => {
            return <TodoItem task={item} id={i}/> 
        })}
    </div>)
    
    
  
}

export default TodoList;

