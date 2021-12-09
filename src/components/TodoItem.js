


// props todo={todo} key={index} dispatchTodos={props.dispatchTodos}
const TodoItem = ({todo, onChange}) => {
  

    const handleChange = (e) => {
      
        e.preventDefault() 
        onChange({type:'toggle', index: todo.index})       
       
      };  

    const deleteTask = (e) => {
           onChange({type:'delete', index: todo.index})   
       /*  e.target.parentElement.remove(); */
    }

    
    return (
        <div className="item">
            <div>
                <input type="checkbox" id="myCheck"  /* checked={checked} */
          onClick={handleChange}></input>
                
                <label htmlFor="myCheck">{todo.text}</label>
            </div>
               <button className="buttonX" onClick={deleteTask}>x</button> 

        </div>
    )
}

export default TodoItem;