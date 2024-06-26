import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import Carousel from '../../components/Carousel/Carousel';
import { db } from '../../firebase'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';
import './EventList.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsCollection = collection(db, 'events');
                const eventsSnapshot = await getDocs(eventsCollection);
                const eventsList = eventsSnapshot.docs.map(doc => ({...doc.data() }));
                setEvents(eventsList);
                console.log(eventsList);
            } catch (error) {
                console.error("Error fetching events: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const renderEventCards = () => {
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

    return (
        <>
            <div className='event-list-wrapper'>
                <Carousel />
                <h1 className='event-h1 m-3'>Live Streaming Events</h1>
                <div className='event-list'>
                    {events.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            loop={true}
                            spaceBetween={50}
                            slidesPerView={1} // Default to 1 for mobile
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
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
                    {events.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1} // Default to 1 for mobile
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
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
                    {events.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1} // Default to 1 for mobile
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
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
