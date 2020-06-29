import * as React from "react";
import "./App.css";

import EventCalendar from "./component/EventCalendar";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl1">
          <NavBar />
        </div>
        <div className="ms-Grid-col ms-sm-1 ms-xl1">
          <EventCalendar />
        </div>
      </div>
    </div>
  );
}

export default App;
