import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { start } from 'repl';
import { useEventStore } from '../state/events';

type Props = { setOpenModal: any };

const CalenderView = (props: Props) => {
  const allEvents = useEventStore((state: any) => state.events);
  const localizer = momentLocalizer(moment);
  const event = allEvents.map((el: any) => {
    return {
      start: new Date(el.dateVenue),
      end: new Date(el.dateVenue),
      title: ` ${el.homeTeam?.name} - ${el.awayTeam?.name}`,
    };
  });
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={(event) => console.log(event)}
        selectable
      />
    </div>
  );
};
export default CalenderView;
