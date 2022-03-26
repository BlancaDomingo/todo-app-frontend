import { useState } from "react";

const TodoInput = ({ createTodo }) => {
  const [userInput, setUserInput] = useState("");
  const [onInput, setOnInput] = useState(false);

  const [remember, setRemember] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [date, setDate] = useState("");

  const onClickButton = () => {
    createTodo({
      text: userInput,
      repeat,
      remember,
      date,
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
            onClick={() => setRemember(!remember)}
            value={remember}
            className={remember ? "buttons buttonOn" : "buttons"}
          >
            <i className="fa fa-bell"></i> Erinnerung
          </button>

          <button
            onClick={() => setRepeat(!repeat)}
            value={repeat}
            className={repeat ? "buttons buttonOn" : "buttons"}
          >
            <i className="fa fa-retweet"></i> Wiederholen
          </button>

          <button
            onClick={(e) => setDate(new Date().toLocaleDateString("de-DE"))}
            defaultValue={date}
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
