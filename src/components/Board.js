import React, { useState } from 'react';
import Column from './Column';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Board = () => {
  const [columns, setColumns] = useState([
    {
      id: 'todo',
      name: 'To Do',
      cards: [
        { id: '1', title: 'Task 1', description: 'Description 1', timeEntries: [] },
        { id: '2', title: 'Task 2', description: 'Description 2', timeEntries: [] },
      ],
    },
    {
      id: 'in-progress',
      name: 'In Progress',
      cards: [
        { id: '3', title: 'Task 3', description: 'Description 3', timeEntries: [] },
      ],
    },
    {
      id: 'done',
      name: 'Done',
      cards: [
        { id: '4', title: 'Task 4', description: 'Description 4', timeEntries: [] },
      ],
    },
  ]);

  const moveCard = (cardId, targetColumnId) => {
    const sourceColumn = columns.find((col) => col.cards.some((card) => card.id === cardId));
    const targetColumn = columns.find((col) => col.id === targetColumnId);

    // Remove the card from the source column
    const updatedSourceColumn = {
      ...sourceColumn,
      cards: sourceColumn.cards.filter((card) => card.id !== cardId),
    };

    // Add the card to the target column
    const updatedTargetColumn = {
      ...targetColumn,
      cards: [...targetColumn.cards, sourceColumn.cards.find((card) => card.id === cardId)],
    };

    // Update the columns state
    setColumns(
      columns.map((col) => {
        if (col.id === sourceColumn.id) return updatedSourceColumn;
        if (col.id === targetColumn.id) return updatedTargetColumn;
        return col;
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">
        {columns.map((column) => (
          <Column key={column.id} column={column} moveCard={moveCard} />
        ))}
      </div>
    </DndProvider>
  );
};

export default Board;
