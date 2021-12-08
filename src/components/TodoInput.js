import { useState } from 'react';

// props = {text: String, onButton: addTask Function}

const TodoInput = ({text, onButton}) => {

    const [userInput, setUserInput] = useState('');
    const [nameTask, setNameTask] = useState([])


    const inputTask = (e) => {
        e.preventDefault() 
        setNameTask([...nameTask, { task: userInput, done: false }])
        onButton(nameTask);
        console.log('..', nameTask);

        setUserInput('') 
    }
    const changeHandler = (e) => {

        setUserInput(e.target.value)
        console.log(userInput);
    }

    return (
        <div>

            <input
                onChange={changeHandler}
                value={userInput} 
                type="text"
                className="input"
                placeholder="Neue Aufgabe..." />

            <button className="inputButton" onClick={inputTask}>{text}</button>

            {/* <p>"{nameTask}"Hinzufugen?</p> */}
        </div>
    )
}

export default TodoInput;



/*

const TodoInput = (props) => {


    const [nameTask, setNameTask] = useState('')


    const inputTask = () => {
        const task = document.querySelector(".input").value;
        console.log('.',task);
        props.onButton([{text:`${task}`,done: false}]);
    }
    const changeHandler = (event) => {

        console.log(event);
        console.log(event.target.value);
        setNameTask(event.target.value)

    }

    return (
        <div>

            <input
                onChange={changeHandler}
                value={nameTask}
                type="text"
                className="input"
                placeholder="Neue Aufgabe..." />

            <button className="inputButton" onClick={inputTask}>{props.text}</button>


        </div>
    )
}

export default TodoInput; */