import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import Carousel from '../../components/Carousel/Carousel';
import { useEventContext } from '../../context/EventContext';
import './EventList.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const EventList = () => {
    const { events, loading } = useEventContext();

    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [hackathons, setHackathons] = useState([]);
    const [workshops, setWorkshops] = useState([]);
    const [competitions, setCompetitions] = useState([]);
    const [otherEvents, setOtherEvents] = useState([]);

    useEffect(() => {
        const today = new Date();
        const filteredUpcoming = events.filter(event => {
            const eventDate = new Date(event.date.year, getMonthIndex(event.date.month), event.date.day);
            return eventDate >= today;
        });
        const filteredPast = events.filter(event => {
            const eventDate = new Date(event.date.year, getMonthIndex(event.date.month), event.date.day);
            return eventDate < today;
        });

        setUpcomingEvents(filteredUpcoming);
        setPastEvents(filteredPast);

        // Filter only upcoming events by type
        setHackathons(filteredUpcoming.filter(event => event.type === 'Hackathon'));
        setWorkshops(filteredUpcoming.filter(event => event.type === 'Workshop'));
        setCompetitions(filteredUpcoming.filter(event => event.type === 'Competition'));
        setOtherEvents(filteredUpcoming.filter(event => event.type === 'Other' || !event.type));
    }, [events]);

    const getMonthIndex = (monthName) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months.indexOf(monthName);
    };

    const renderEventCards = (events) => {
        return events.map(({ id, heading, description, date, location, img }) => (
            <SwiperSlide key={id}>
                <EventCard
                    id={id}
                    heading={heading}
                    location={location}
                    description={description}
                    date={date}
                    img={img}
                />
            </SwiperSlide>
        ));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const renderEventSection = (title, eventList) => (
        <>
            <h1 className='event-h1'>{title}</h1>
            <div className='event-list'>
                {eventList.length > 0 ? (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={Math.min(1, eventList.length)}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: Math.min(1, eventList.length),
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: Math.min(2, eventList.length),
                                spaceBetween: 40,
                            },
                            1152: {
                                slidesPerView: Math.min(3, eventList.length),
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {renderEventCards(eventList)}
                    </Swiper>
                ) : (
                    <p>No {title.toLowerCase()} available</p>
                )}
            </div>
        </>
    );

    return (
        <div className='event-list-wrapper'>
            <Carousel />
            {renderEventSection('Live Upcoming Events', upcomingEvents)}
            {renderEventSection('Hackathons', hackathons)}
            {renderEventSection('Workshops', workshops)}
            {renderEventSection('Competitions', competitions)}
            {renderEventSection('Other Events', otherEvents)}
            {renderEventSection('Past Events', pastEvents)}
        </div>
    );
};

export default EventList;