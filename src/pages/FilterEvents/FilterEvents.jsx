import React, { useState, useCallback } from 'react'
import FilterBox from '../../components/FilterBox/FilterBox'
import './FilterEvents.css'
import SearchEventList from '../../components/SearchEventList/SearchEventList'
import Calendar from '../../components/Calendar/CalendarComponent';
import { eventList } from '../../utils/EventDatabase';

const FilterEvents = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth: null,
    selectedYear: null
  })

  
  const getMonthYear = useCallback((selectedMonth, selectedYear)=>{
    setMonthYear({selectedYear,selectedMonth})
  },[])

  return (
    <div className='container'>
      <Calendar events={eventList}/>
      <div className='find-events-wrapper'>
      <FilterBox getMonthYear={getMonthYear}/>
      <SearchEventList monthYear={monthYear}/></div>
    </div>
  )
}

export default FilterEvents