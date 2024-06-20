import React from 'react'
import "./EventCard.css"
import { useNavigate } from 'react-router-dom';

const EventCard = ({ id, date, heading, description, location, img }) => {
    const { year, month } = date;
    const navigate = useNavigate();

    const buttonClick=(id)=>{
      console.log(`clicked ${id}`);
      navigate(`/events/${id}`);
    }
    return (
        <>
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
        <button onClick={()=>buttonClick(id)} className='button-88'>Resgister</button>
      </div>
        </>
    )
}

export default EventCard