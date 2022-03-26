import React from "react";
import "../scss/LoggedIn.scss";
import { useNavigate } from "react-router-dom";


export default function LoggedIn({ userName, onLogout }) {

  const navigate = useNavigate();

  function logOut() {   
    onLogout(); 
    navigate("/");// nicht richtig
  }

  return (
    <div className="loggedIn-div">
      {userName.length > 0 && <p>
        Hallo <span className="userName">{userName} </span>{" "}
        <button className="ButtonLogout" onClick={logOut}>
            Ausloggen
          </button>
       
      </p>}
    </div>
  );
}

