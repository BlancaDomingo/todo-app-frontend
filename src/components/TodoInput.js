import { useState } from 'react';

// onButton={goToReducer}

const TodoInput = ({ onButton }) => {

    const [userInput, setUserInput] = useState('');


    const changeHandler = (e) => {
        setUserInput(e.target.value)
    }

    const onClick = () => {
        onButton({ type: 'add', payload: { text: userInput, index: new Date().getTime() } })
        setUserInput('')
    }

    return (
        <div>

            <input
                onChange={changeHandler}
                value={userInput}
                type="text"
                className="input"
                placeholder="Neue Aufgabe..." />

            <button className="inputButton" onClick={onClick}>
                Fertig</button>


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