import React from 'react';
import './EventCard.css';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ id, date, heading, description, location, img }) => {
    const { year, month, day } = date; // Assuming date object also has a day property
    const navigate = useNavigate();

    const buttonClick = (id) => {
        console.log(`clicked ${id}`);
        navigate(`/events/${id}`);
    };

    const isEventCompleted = () => {
        const eventDate = new Date(year, new Date(`${month} 1`).getMonth(), day);
        const today = new Date();
        return eventDate < today;
    };

    return (
        <div className="card">
            <div className="card-content">
                <h3>{heading}</h3>
                <p>
                    <span>Year: {year}</span>
                    <span>Month: {month}</span>
                </p>
                <p>{location}</p>
            </div>

            <div className="card-img-wrapper">
                <img src={img} alt="image not found" />
            </div>
            {!isEventCompleted()?(
                <button onClick={() => buttonClick(id)} className='button-88'>View</button>
            ):<button className='button-88 expired'>Expired</button> }
        </div>
    );
};

export default EventCard;
