import { useState } from 'react';


// props { todo: {text: String, done: Boolean}}
const TodoItem = (props) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        console.log(!checked);
      };




  /*      { die heisst so = todo}
    const { todo } = props; */

    const deleteTask = (e) => {
       
        console.log('e',e);
        e.target.parentElement.remove();
    }

 

    
    return (
        <div className="item">
            <div>
                <input type="checkbox" id="myCheck"  checked={checked}
          onChange={handleChange}></input>
                
                <label htmlFor="myCheck">{props.todo.text}</label>
            </div>
               <button className="buttonX" onClick={deleteTask}>x</button> 

        </div>
    )
}

export default TodoItem;