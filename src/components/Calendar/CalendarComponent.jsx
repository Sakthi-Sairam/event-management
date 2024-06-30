import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import { useEventContext } from '../../context/EventContext'; // Import context hook

const localizer = momentLocalizer(moment);

const getEventDate = (date) => {
  const monthIndex = new Date(Date.parse(date.month + " 1, " + date.year)).getMonth();
  return new Date(date.year, monthIndex, date.day);
};

const CalendarComponent = () => {
  const navigate = useNavigate();
  const { events } = useEventContext(); // Access events from context

  const handleSelectEvent = (event) => {
    navigate(`/events/${event.id}`);
  };

  const eventList = events.map(event => ({
    id: event.id,
    title: event.heading,
    start: getEventDate(event.date),
    end: getEventDate(event.date),
    allDay: true,
  }));

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={eventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month']}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default CalendarComponent;
