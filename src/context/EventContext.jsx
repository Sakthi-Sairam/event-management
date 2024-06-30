import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the path if needed
import { collection, getDocs } from 'firebase/firestore';

const EventContext = createContext();

export const useEventContext = () => {
    return useContext(EventContext);
};

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsCollection = collection(db, 'events');
                const eventsSnapshot = await getDocs(eventsCollection);
                const eventsList = eventsSnapshot.docs.map(doc => ({ ...doc.data(),fid:doc.id}));
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

    return (
        <EventContext.Provider value={{ events, loading ,setEvents}}>
            {children}
        </EventContext.Provider>
    );
};