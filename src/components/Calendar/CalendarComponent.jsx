import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const getEventDate = (date) => {
  const monthIndex = new Date(Date.parse(date.month + " 1, " + date.year)).getMonth();
  return new Date(date.year, monthIndex, date.day);
};

const CalendarComponent = ({ events }) => {
  const navigate = useNavigate();

  const handleSelectEvent = (event) => {
    navigate(`/events/${event.id}`);
  };

  const eventList = events.map(event => ({
    id: event.id,  // include id to use in handleSelectEvent
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
        views={['month']}  // Only show the month view
        onSelectEvent={handleSelectEvent}  // Handle event clicks
      />
    </div>
  );
};

export default CalendarComponent;
