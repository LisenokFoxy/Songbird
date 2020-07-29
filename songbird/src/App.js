import React from "react";
import "./App.css";
import { Header } from "./Components/Header/header";

function App() {
  return (
    <div className="App">
      <div className="wrapper">{<Header></Header>}</div>
    </div>
  );
}

export default App;
