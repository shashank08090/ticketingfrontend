import React from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';

const Column = ({ column, moveCard }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => moveCard(item.cardId, column.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="column" style={{ backgroundColor: isOver ? '#f0f0f0' : '#fff' }}>
      <h3>{column.name}</h3>
      <div className="card-container">
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Column;
