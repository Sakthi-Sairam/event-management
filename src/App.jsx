import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList/EventList';
import FilterEvents from './pages/FilterEvents/FilterEvents';
import EventDetails from './pages/EventDetails/EventDetails';
import Navigation from './components/Navigation/Navigation';
import AddEvent from './pages/AddEvent/AddEvent';
import { EventProvider } from './context/EventContext'; // Adjust the path as per your file structure
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <EventProvider>
        <Navigation /> {/* Navigation component */}
        <Routes>
          <Route path="/" element={<EventList />} /> {/* Default route to EventList */}
          <Route path="/find-events" element={<FilterEvents />} /> {/* Route to FilterEvents */}
          <Route path="/add-event" element={<AddEvent />} /> {/* Route to AddEvent */}
          <Route path="/events/:id" element={<EventDetails />} /> {/* Route to EventDetails */}
          <Route path="/event/admin" element={<AdminPage/>} /> {/* Route to EventDetails */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </EventProvider>
    </BrowserRouter>
  );
}

export default App;
