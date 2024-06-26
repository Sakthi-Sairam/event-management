import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard'
import { db } from '../../firebase'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';
const SearchEventList = ({monthYear}) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const {selectedMonth, selectedYear} = monthYear;

  const filteredEvents = events.filter((evnt)=>{
    return(
      Number(evnt.date.year) === Number(selectedYear) && 
      evnt.date.month === selectedMonth
      )})
    console.log(filteredEvents)
    if (loading) {
      return <div>Loading...</div>;
    }

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