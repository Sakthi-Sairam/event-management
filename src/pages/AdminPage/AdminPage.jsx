import React from 'react';
import { Link } from 'react-router-dom';
import { useEventContext } from '../../context/EventContext';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import './AdminPage.css';

const AdminPage = () => {
  const { events, loading, setEvents } = useEventContext();

  const handleDelete = async (fid) => {
    try {
      const eventDoc = doc(db, 'events', fid);
      await deleteDoc(eventDoc);
      setEvents(events.filter(event => event.fid !== fid));
      console.log(`Event with Firestore ID ${fid} deleted.`);
    } catch (error) {
      console.error("Error deleting event: ", error);
    }
  };

  const groupEventsByType = (events) => {
    const groupedEvents = events.reduce((acc, event) => {
      const type = event.type || 'Other';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(event);
      return acc;
    }, {});
    return groupedEvents;
  };

  const getMonthIndex = (monthName) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(monthName);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const today = new Date();
  const pastEvents = events.filter(event => {
    const eventDate = new Date(event.date.year, getMonthIndex(event.date.month), event.date.day);
    return eventDate < today;
  });

  const groupedEvents = groupEventsByType(events.filter(event => {
    const eventDate = new Date(event.date.year, getMonthIndex(event.date.month), event.date.day);
    return eventDate >= today;
  }));

  return (
    <div className="admin-page-container">
      <h1>Admin Page - Manage Events</h1>
      <Link to="/add-event" className="admin-add-button">Add New Event</Link>
      <div>
        <h2 className="event-type-heading">Expired Events</h2>
        <ul className="admin-event-list">
          {pastEvents.map(event => (
            <li key={event.fid} className="admin-event-item">
              <div className="admin-event-details">
                <h3>{event.heading}</h3>
                <p>{event.description}</p>
                <p><strong>Date:</strong> {event.date.day} {event.date.month}, {event.date.year}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
              <div className="admin-event-actions">
                <button onClick={() => handleDelete(event.fid)} className="admin-delete-button">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {Object.keys(groupedEvents).map(type => (
        <div key={type}>
          <h2 className="event-type-heading">{type} Events</h2>
          <ul className="admin-event-list">
            {groupedEvents[type].map(event => (
              <li key={event.fid} className="admin-event-item">
                <div className="admin-event-details">
                  <h3>{event.heading}</h3>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {event.date.day} {event.date.month}, {event.date.year}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                </div>
                <div className="admin-event-actions">
                  <button onClick={() => handleDelete(event.fid)} className="admin-delete-button">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
