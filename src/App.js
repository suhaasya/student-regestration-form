import "./App.css";
import { useState } from "react";

import Nav from "./components/Nav";

import Main from "./components/Main";
function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("initialState")) || []
  );

  localStorage.setItem("initialState", JSON.stringify(userData));

  return (
    <div>
      <Nav />
      <Main setUserData={setUserData} userData={userData} />
    </div>
  );
}

export default App;
