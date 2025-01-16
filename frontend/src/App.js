import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import './App.css'
const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get('http://localhost:5000/api/events');
=======
        const response = await axios.get('https://dashboard.render.com/web/srv-cu4b89dds78s739qs2sg');
>>>>>>> 21d19b6cd2fb9e71eedecea651344c515aecfc6b
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4">Event Management</h1>
      <EventForm setEvents={setEvents} />
      <EventList events={events} setEvents={setEvents} />
    </div>
  );
};

export default App;
