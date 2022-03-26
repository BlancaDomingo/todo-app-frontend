import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../scss/LoginPage.scss";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const USERS_PATH = BACKEND_URL + "/users";

export default function RegisterPage({ onLogin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    };

    const result = await fetch(USERS_PATH + "/register", options);
    console.log("result", result);
    console.log("email", email, password);
    const body = await result.json();
    console.log("body", body);

    // if (result.status === 200) {
    if (body.message === "success") {
      const { token, user } = body.data;
      console.log("mein token:", token);
      console.log("Login succesfull");
      onLogin({
        user,
        token,
      });
      navigate("/todoApp");
    } else {
      setError(body.message);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h3>Konto erstellen</h3>

        <input
          type="text"
          value={firstName}
          onInput={(e) => setFirstName(e.target.value)}
          className="inputLogin"
          placeholder="Vorname..."
        />

        <input
          type="text"
          value={lastName}
          onInput={(e) => setLastName(e.target.value)}
          className="inputLogin"
          placeholder="Nachname..."
        />

        <input
          type="text"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          className="inputLogin"
          placeholder="E-mail..."
        />

        <input
          type="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
          className="inputLogin"
          placeholder="Passwort..."
        />

        <div>
          <button className="inputButtonLogin">Registrieren</button>
        </div>
        <p className="errorLogin">{error}</p>
      </form>
    </>
  );
}
