import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList/EventList';
import FilterEvents from './pages/FilterEvents/FilterEvents';
import EventDetails from './pages/EventDetails/EventDetails';
import Navigation from './components/Navigation/Navigation';
import AddEvent from './pages/AddEvent/AddEvent';
// import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/find-events" element={<FilterEvents />} />
        <Route path="/add-event" element={<AddEvent/>} />
        <Route path="/events/:id" element={<EventDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;