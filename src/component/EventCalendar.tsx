import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

class EventCalendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={this.handleDateClick}
        events={[
          { title: "event 1", date: "2020-06-01" },
          { title: "event 2", date: "2020-06-02" },
        ]}
      />
    );
  }

  handleDateClick = (arg: any) => {
    // lorsque une date est cliquee
    alert(arg.dateStr);
  };
}

export default EventCalendar;
