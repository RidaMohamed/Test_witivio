import React from "react";
import logo from "./logo.svg";
import "./App.css";

import EventCalendar from "./component/EventCalendar";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <EventCalendar />
    </div>
  );
}

export default App;
