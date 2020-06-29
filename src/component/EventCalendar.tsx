import * as React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { INITIAL_REUNION, createEventId } from "./reunion";

export default class EventCalendar extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }} //ajout d'affichage des 3 types (jour, mois, semaine)
            initialView="dayGridMonth"
            editable={true} // pour changer les
            selectable={true}
            dayMaxEvents={true} //le max des reunion a afficher dans une case
            initialEvents={INITIAL_REUNION} //importer le modele de reunion pour le courant jour par defaut
            select={this.CliquerDate}
            eventContent={renderEventContent} //
            eventsSet={this.handleEvents}
          />
        </div>
      </div>
    );
  }

  CliquerDate = (selectInfo: any) => {
    //creation de reunion

    let title = prompt("Entrez le titre de votre reunion");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // supprimer la date selectionner

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  handleEvents = (events: any) => {
    this.setState({
      currentEvents: events,
    });
  };
}

// pour l'affichage dans les semaines lheure et le titre
function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}&nbsp;</b>
      <b>{eventInfo.event.title} </b>
    </>
  );
}
