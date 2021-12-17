import { useState } from "react";

// onButton={goToReducer}

const TodoInput = ({ onButton }) => {
  const [userInput, setUserInput] = useState("");
  const [onInput, setOnInput] = useState(false);

  const [remember, setRemember] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [date, setDate] = useState("");

  /* 
    const changeHandler = (e) => {
        setUserInput(e.target.value)
    } */

  const onClickButton = () => {
    onButton({
      type: "add",
      payload: {
        text: userInput,
        index: new Date().getTime(),
        remember: remember,
        repeat: repeat,
        date: date,
      },
    });
    setUserInput("");
    setRemember(false);
    setRepeat(false);
    setDate("");
    setOnInput(false);
  };

  const onClickInput = () => {
    setOnInput(true);
  };

  return (
    <div>
      <div>
        <input
          onClick={onClickInput}
          /* onChange={changeHandler} */
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          type="text"
          className="input"
          placeholder="Neue Aufgabe..."
        />
      </div>

      <div className={onInput ? "showButtons" : "noShowButtons"}>
        <div className="buttons3">
          <button
            onClick={(e) => setRemember(!remember)}
            value={remember}
            className={remember ? "buttons buttonOn" : "buttons"}
          >
            <i className="fa fa-bell"></i> Erinnerung
          </button>

          <button
            onClick={(e) => setRepeat(!repeat)}
            value={repeat}
            className={repeat ? "buttons buttonOn" : "buttons"}
          >
            <i className="fa fa-retweet"></i> Wiederholen
          </button>

          <button
            onClick={(e) => setDate(new Date().toLocaleDateString("en-US"))}
            value={date}
            className={date ? "buttons buttonOn" : "buttons"}
          >
            <i className="fa fa-calendar"></i> Datum hinzufügen
          </button>
        </div>

        <button className="inputButton" onClick={onClickButton}>
          + Aufgabe hinzufügen
        </button>
      </div>
    </div>
  );
};

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
