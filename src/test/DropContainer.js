import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropContainer = () => {
  const [items, setItems] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: (item) => {
      setItems([...items, item]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const containerStyle = {
    border: isOver ? '2px dashed red' : '2px dashed gray',
    minHeight: '100px',
    padding: '10px',
  };

  return (
    <div ref={drop} style={containerStyle}>
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

export default DropContainer;
