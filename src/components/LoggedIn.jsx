import React from "react";
import "../scss/LoggedIn.scss";

export default function LoggedIn({ userName }) {
  return (
    <div className="loggedIn-div">
      {userName.length > 0 && <p>
        Hallo <span className="userName">{userName} </span>{" "}
        <button className="ButtonLogout">Ausloggen</button>
      </p>}
    </div>
  );
}
