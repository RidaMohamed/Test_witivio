import * as React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import {
  Modal,
  IconButton,
  IIconProps,
  getTheme,
  mergeStyleSets,
  FontWeights,
} from "office-ui-fabric-react";
import { INITIAL_REUNION, createEventId } from "./reunion";

const cancelIcon: IIconProps = { iconName: "Cancel" };

export default class EventCalendar extends React.Component {
  state = {
    weekendsVisible: true,
    showModal: true,
    hideModal: false,
    isModalOpen: false,
    currentEvents: [],
  };

  toggle = () => {
    this.setState({
      isModalOpen: this.state.hideModal,
    });
  };

  openModel = () => {
    this.setState({
      isModalOpen: this.state.showModal,
    });
  };

  render() {
    return (
      <div className="demo-app">
        <div className="demo-app-main">
          <Modal
            isOpen={this.state.isModalOpen}
            onDismiss={this.toggle}
            isBlocking={false}
            containerClassName={contentStyles.container}
          >
            <div className={contentStyles.header}>
              <span>Lorem Ipsum</span>
              <IconButton
                styles={iconButtonStyles}
                iconProps={cancelIcon}
                ariaLabel="Fermer popup modal"
                onClick={this.toggle}
              />
            </div>
            <div className={contentStyles.body}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate
                in leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu
                sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum
                vestibulum non. Proin dolor elit, aliquam eget tincidunt non,
                vestibulum ut turpis. In hac habitasse platea dictumst. In a
                odio eget enim porttitor maximus. Aliquam nulla nibh,
                ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex
                lectus, maximus in mollis ac, luctus vel eros. Vivamus ultrices,
                turpis sed malesuada gravida, eros ipsum venenatis elit, et
                volutpat eros dui et ante. Quisque ultricies mi nec leo
                ultricies mollis. Vivamus egestas volutpat lacinia. Quisque
                pharetra eleifend efficitur.
              </p>
            </div>
          </Modal>

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
    this.openModel();
    let title = true;
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

// style

const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
  },
  header: [
    // tslint:disable-next-line:deprecation
    theme.fonts.xLargePlus,
    {
      flex: "1 1 auto",
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: "flex",
      alignItems: "center",
      fontWeight: FontWeights.semibold,
      padding: "12px 12px 14px 24px",
    },
  ],
  body: {
    flex: "4 4 auto",
    padding: "0 24px 24px 24px",
    overflowY: "hidden",
    selectors: {
      p: { margin: "14px 0" },
      "p:first-child": { marginTop: 0 },
      "p:last-child": { marginBottom: 0 },
    },
  },
});

const iconButtonStyles = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
