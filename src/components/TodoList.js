import TodoItem from "./TodoItem";


// props = {todos: Array}
const TodoList = (props) => {
 
   
    return (
    <div>       
        {props.todos.map((todo, index) => (<TodoItem todo={todo} key={index}/>))}         

    </div>
    );
    
    
  
}

export default TodoList;

