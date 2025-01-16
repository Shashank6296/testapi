// frontend/src/components/EventItem.js
import React from 'react';

const EventItem = ({ event, onEditEvent, onDeleteEvent }) => {
  return (
    <div className="event-item">
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
      <button onClick={() => onEditEvent(event)}>Edit</button>
      <button onClick={() => onDeleteEvent(event._id)}>Delete</button>
    </div>
  );
};

export default EventItem;
