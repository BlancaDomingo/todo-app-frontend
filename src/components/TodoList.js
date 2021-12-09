import TodoItem from "./TodoItem";


// onButton={goToReducer}
const TodoList = ({todos, onChange}) => {
    console.log('props.todos', todos);
   
    return (
    <div>       
        {todos.map((todo, i) => (<TodoItem todo={todo} key={i} onChange={onChange}/>))}         

    </div>
    ); 
    
  
}

export default TodoList;



