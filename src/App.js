import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import TodosPage from "./pages/TodosPage";
import Help from "./components/Help";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RegisterPage from "./pages/RegisterPage";
import LoggedIn from "./components/LoggedIn";

function App() {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("")

  const onLogin = (data) => {
    const freshToken = data.token;
    if (freshToken) {
      setToken(freshToken);
      setUserName(data.user.firstName);
      setUserId(data.user._id)
    }
  };
  return (
    <>

      <div className="superdiv">
        {token.length > 0 && <LoggedIn userName={userName} />}
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage onLogin={onLogin} />} />
            <Route path="/register" element={<RegisterPage onLogin={onLogin} />} />
            <Route path="/todoApp" element={<TodosPage token={token} userId={userId} />} />
            <Route path="/todoApp/Hilfe" element={<Help />} />
            <Route path="*" element={<LoginPage onLogin={onLogin} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
