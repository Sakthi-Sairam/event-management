import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./EventDetails.css";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { db } from '../../firebase'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';

const EventDetails = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const numId = Number(id);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, 'events');
        const eventsSnapshot = await getDocs(eventsCollection);
        const eventsList = eventsSnapshot.docs.map(doc => ({...doc.data() }));
        console.log(eventsList);
        setEvents(eventsList);
      } catch (error) {
        console.error("Error fetching events: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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
