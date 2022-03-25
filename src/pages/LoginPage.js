import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./LoginPage.scss";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const USERS_PATH = BACKEND_URL + "/users";

export default function LoginPage({ onLogin }) {
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
      body: JSON.stringify({ email, password }),
    };

    const result = await fetch(USERS_PATH + "/login", options);
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
        <h3>
          Einloggen oder{" "}
          <Link className="linkRegister" to="/register">
            Konto erstellen
          </Link>
        </h3>

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
          <button className="inputButtonLogin">Einloggen</button>
        </div>
        <p className="errorLogin">{error}</p>
      </form>
    </>
  );
}
