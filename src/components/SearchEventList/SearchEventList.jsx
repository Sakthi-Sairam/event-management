import React from 'react'
import EventCard from '../EventCard/EventCard'
import { eventList } from '../../utils/EventDatabase'
const SearchEventList = ({monthYear}) => {
  const {selectedMonth, selectedYear} = monthYear;

  const filteredEvents = eventList.filter((evnt)=>{
    return(
      Number(evnt.date.year) === Number(selectedYear) && 
      evnt.date.month === selectedMonth
      )})
    console.log(filteredEvents)

    const renderEventCards = () => {
      return filteredEvents.map(({ id, heading, description, date, location, img }) => (
          <EventCard
              id={id}
              heading={heading}
              location={location}
              description={description}
              date={date}
              img={img}
            />
          )
        );
      };

  return (
    <div>
      {filteredEvents.length>0 ? (
        renderEventCards()
      ) : (
        <h3>No Events in the date</h3>
      )
      }
    </div>
  )
}

export default SearchEventList