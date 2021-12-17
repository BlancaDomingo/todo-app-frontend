import TodoItem from "./TodoItem";


// onButton={goToReducer}
const TodoList = ({todos, onChange, greenOn}) => {
    console.log('props.todos', todos);
   
    return (
    <div>       
        {todos.map((todo, i) => (<TodoItem todo={todo} key={i} onChange={onChange} greenOn={greenOn}/>))}         

    </div>
    ); 
    
  
}

export default TodoList;



