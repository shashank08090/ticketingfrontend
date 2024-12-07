import React from 'react';
import { useDrag } from 'react-dnd';
import TimeEntry from './TimeEntry';

const Card = ({ card, handleAddTime }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { cardId: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="card"
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isDragging ? '#e8e8e8' : '#fff',
      }}
    >
      <h4>{card.title}</h4>
      <p>{card.description}</p>
      <button>Add Time</button>
      <div>
        <h5>Time Spent:</h5>
        {card.timeEntries &&
          card.timeEntries.map((entry, index) => (
            <div key={index}>
              <span>{entry.time}</span> - <span>{entry.date}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
