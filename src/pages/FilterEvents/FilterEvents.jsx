import React, { useState, useCallback, useEffect } from 'react'
import FilterBox from '../../components/FilterBox/FilterBox'
import './FilterEvents.css'
import SearchEventList from '../../components/SearchEventList/SearchEventList'
import Calendar from '../../components/Calendar/CalendarComponent';
import { db } from '../../firebase'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';

const FilterEvents = () => {
  const [events, setEvents] = useState([]);

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
      }
    };

    fetchEvents();
  }, []);

  const [monthYear, setMonthYear] = useState({
    selectedMonth: null,
    selectedYear: null
  })

  
  const getMonthYear = useCallback((selectedMonth, selectedYear)=>{
    setMonthYear({selectedYear,selectedMonth})
  },[])

  return (
    <div className='container'>
      <Calendar events={events}/>
      <div className='find-events-wrapper'>
      <FilterBox getMonthYear={getMonthYear}/>
      <SearchEventList monthYear={monthYear}/></div>
    </div>
  )
}

export default FilterEvents