import { useState } from 'react';

// props = {text: String, onButton: addTask Function}

const TodoInput = (props) => {
    
    const [nameTask, setNameTask] = useState('')

    const inputTask = () => {
       
        props.onButton(nameTask);
    }
    const changeHandler = (event) => {
        
        console.log(event);
        console.log(event.target.value);
        setNameTask(event.target.value)

    }

    return (
        <div>
            <form action="">
                <input
                onChange={changeHandler} 
                value={nameTask}
                type="text" 
                className="input" 
                placeholder="Neue Aufgabe"/>

                <button type="submit" className="inputButton" onClick={inputTask}>{props.text}</button>
            </form>
            <p>"{nameTask}"Hinzufugen?</p>
        </div>
    )
}

export default TodoInput;