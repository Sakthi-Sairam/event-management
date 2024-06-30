import React, { useState } from 'react';
import './AddEvent.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    heading: '',
    date: {
      day: '',
      month: 'January',
      year: ''
    },
    location: '',
    description: '',
    img: '',
    link: '',
    type: 'Hackathon' // Default event type
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      date: {
        ...eventData.date,
        [name]: value
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uniqueId = Date.now();

    const newEvent = {
      id: uniqueId,
      ...eventData
    };

    try {
      await addDoc(collection(db, "events"), newEvent);
      console.log('New Event Added:', newEvent);
      // Reset form data after successful submission
      setEventData({
        heading: '',
        date: {
          day: '',
          month: 'January',
          year: ''
        },
        location: '',
        description: '',
        img: '',
        link: '',
        type: 'Hackathon'
      });
    } catch (error) {
      console.error("Error adding event: ", error);
    }
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
        <div className='date-group'>
          <div className="form-group">
            <label htmlFor="day">Day</label>
            <input
              type="number"
              id="day"
              name="day"
              value={eventData.date.day}
              onChange={handleDateChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="month">Month</label>
            <select
              id="month"
              name="month"
              value={eventData.date.month}
              onChange={handleDateChange}
              required
            >
              {[
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
              ].map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              value={eventData.date.year}
              onChange={handleDateChange}
              required
            />
          </div>
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
        <div className="form-group">
          <label htmlFor="link">Registration Form Link (Google Forms / Microsoft Forms / Other Forms)</label>
          <input
            type="text"
            id="link"
            name="link"
            value={eventData.link}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Event Type</label>
          <select
            id="type"
            name="type"
            value={eventData.type}
            onChange={handleChange}
            required
          >
            {['Hackathon', 'Workshop', 'Competition', 'Other'].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="button-88">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
