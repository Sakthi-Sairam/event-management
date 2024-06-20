import React, { useState } from 'react';
import './AddEvent.css';

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    heading: '',
    date: '',
    location: '',
    description: '',
    img: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventData);
    // You can add functionality to save the eventData to a database or state here
  };

  return (
    <div className="add-event-container">
      <h1 className="add-event-title">Add New Event</h1>
      <form className="add-event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="heading">Event Title</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={eventData.heading}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            id="img"
            name="img"
            value={eventData.img}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button-88">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
