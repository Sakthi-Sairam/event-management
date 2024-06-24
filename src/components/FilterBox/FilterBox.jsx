import { useState, useEffect } from "react"
import './FilterBox.css'

const FilterBox = ({getMonthYear}) => {

    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedYear, setSelectedYear] = useState(2024)

    const DataToRender = (dataArray)=>{
        return dataArray.map((data,index)=>{
            return(
                <option value={data} key={index}>{data}</option>
            )
        })
    }
    const YearsToRender = ()=>{
        const years = [
            2023,
            2024,
            2025
        ]
        return DataToRender(years);
    }
    const MonthsToRender = ()=>{
        const months=[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
        return DataToRender(months)
    }

    const handleMonthChange = (e)=>{
        setSelectedMonth(e.target.value)
    }
    const handleYearChange = (e)=>{
        setSelectedYear(e.target.value)
    }

    

    useEffect(()=>{
        const updateParent = ()=>{
            getMonthYear(selectedMonth,selectedYear)
        }
        updateParent();
    },[selectedMonth, selectedYear, getMonthYear])
    return(
        <div>
            <form className="filter-card">
             <div className="wrapper">
                <div className="date">
                    <label htmlFor="month">Month : </label>
                        <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                        >
                        {MonthsToRender()}
                        </select>
                </div>
                <div className="date">
                    <label htmlFor="year">Year : </label>
                    <select
                    value={selectedYear}
                    onChange={handleYearChange}
                    >
                        {YearsToRender()}
                    </select>
               </div>
               </div>
             </form>
           
        </div>
    )
}

export default FilterBox