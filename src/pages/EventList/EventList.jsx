import React from 'react'
import EventCard from '../../components/EventCard/EventCard'
import Carousel from '../../components/Carousel/Carousel';
import { eventList } from '../../utils/EventDatabase';
import "./EventList.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Calendar from '../../components/Calendar/CalendarComponent';

const EventList = () => {
    const renderEventCards = () => {
        return eventList.map(({ id, heading, description, date, location, img }) => (
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

    return (
        <>
        <div className='event-list-wrapper'>
            <Carousel/>
            {/* <Calendar events={eventList}/> */}
            <h1 className='event-h1 m-3'>Live Streaming Events</h1>
            <div className='event-list'>
                {eventList.length > 0 ? (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        loop = {true}
                        spaceBetween={50}
                        slidesPerView={1} // Default to 1 for mobile
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            // when window width is >= 1024px
                            1152: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {renderEventCards()}
                    </Swiper>
                ) : (
                    <p>No events available</p>
                )}
            </div>
            <h1 className='event-h1'>Free Workshops and Webinars</h1>
            <div className='event-list'>
                {eventList.length > 0 ? (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1} // Default to 1 for mobile
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            // when window width is >= 1024px
                            1152: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {renderEventCards()}
                    </Swiper>
                ) : (
                    <p>No events available</p>
                )}
            </div>
            <h1 className='event-h1'>Competitions</h1>
            <div className='event-list'>
                {eventList.length > 0 ? (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1} // Default to 1 for mobile
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            // when window width is >= 1024px
                            1152: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {renderEventCards()}
                    </Swiper>
                ) : (
                    <p>No events available</p>
                )}
            </div>
        </div>
        </>
    );
};

export default EventList;
