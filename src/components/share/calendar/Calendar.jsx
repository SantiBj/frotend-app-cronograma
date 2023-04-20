import "./calendar.css";
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import esLocale from "@fullcalendar/core/locales/es";
import moment from "moment-timezone";

export function Calendar({ events }) {
  // en este caso map almacenara en la variable un array de objetos
  const formatEvents = events ? events.map((event) => {

    //se esta sumando un dia a la fecha final
    // por que fullcalendar muestra la asignacion un dia antes
    // es decir no va esta el final
    const endDayString = event.fechaFin
    const endDayDate = moment(endDayString,'YYYY-MM-DD')
    endDayDate.add(1,'day')
    const newEndDate = endDayDate.format('YYYY-MM-DD')

    return {
      title: event.rap.nombre,
      start: event.fechaInicio,
      end: newEndDate,
    };
  }) : null

  return (
    <div className="max-w-[450px] mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        timeZone="America/Bogota"
        locales={esLocale}
        locale={"es"}
        nowIndicator={true}
        events={formatEvents}
      />
    </div>
  );
}
