import React, { useContext, useEffect, useState } from 'react';
import EventCard from '../EventCard/EventCard';
import { useEventContext } from '../../context/EventContext'; // Import context hook

const SearchEventList = ({ monthYear }) => {
  const { events } = useEventContext(); // Access events from context
  const { selectedMonth, selectedYear } = monthYear;
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Filter events based on selectedMonth and selectedYear
    const filteredEvents = events.filter((event) => {
      return (
        Number(event.date.year) === Number(selectedYear) &&
        event.date.month === selectedMonth
      );
    });

    setFilteredEvents(filteredEvents);
    setLoading(false);
  }, [events, selectedMonth, selectedYear]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderEventCards = () => {
    return filteredEvents.map(({ id, heading, description, date, location, img }) => (
      <EventCard
        key={id}
        id={id}
        heading={heading}
        location={location}
        description={description}
        date={date}
        img={img}
      />
    ));
  };

  return (
    <div className='filter-event-display'>
      {filteredEvents.length > 0 ? (
        renderEventCards()
      ) : (
        <h3>No Events in the selected date</h3>
      )}
    </div>
  );
};

export default SearchEventList;
