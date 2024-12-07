import React, { useState } from 'react';

const TimeEntry = ({ cardId, handleAddTime }) => {
  const [time, setTime] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTime(cardId, time);
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter time (e.g., 1 hour)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add Time</button>
    </form>
  );
};

export default TimeEntry;
