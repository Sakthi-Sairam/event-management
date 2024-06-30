import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import "./EventDetails.css";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useEventContext } from '../../context/EventContext'; // Import the context hook

const EventDetails = () => {
  const { events, loading } = useEventContext(); // Use context hook to get events and loading state
  const { id } = useParams();
  const numId = Number(id);

  const filteredEvent = events.find((event) => event.id === numId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!filteredEvent) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details-container">
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name: {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date.month}
              </span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
          <a href={filteredEvent.link} className='button-88'>Register</a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
