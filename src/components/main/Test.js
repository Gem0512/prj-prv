// import React, { useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { Responsive, WidthProvider } from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';

// const ReactGridLayout = WidthProvider(Responsive);

// const initialItems = [
//   { id: 1, title: 'Item 1' },
//   { id: 2, title: 'Item 2' },
//   { id: 3, title: 'Item 3' },
// ];

// const DragDropItem = ({ id, title, onDrop }) => {
//   const [{ isDragging }, dragRef] = useDrag({
//     item: { id, title, type: 'CARD' },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [, dropRef] = useDrop({
//     accept: 'CARD',
//     drop: () => onDrop(id),
//   });

//   return (
//     <div
//       ref={dragRef}
//       style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
//     >
//       <div ref={dropRef}>{title}</div>
//     </div>
//   );
// };

// const Test = () => {
//   const [items, setItems] = useState(initialItems);
//   const [formItems, setFormItems] = useState([]);

//   const onDropItem = (itemId) => {
//     const droppedItem = items.find((item) => item.id === itemId);
//     setFormItems((prevItems) => [...prevItems, droppedItem]);
//   };

//   const onLayoutChange = (layout) => {
//     console.log(layout);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div>
//         <h3>Section 1</h3>
//         {items.map((item) => (
//           <DragDropItem
//             key={item.id}
//             id={item.id}
//             title={item.title}
//             onDrop={onDropItem}
//           />
//         ))}
//       </div>
//       <div>
//         <h3>Section 2</h3>
//         <ReactGridLayout onLayoutChange={onLayoutChange}>
//           {items.map((item) => (
//             <div key={item.id} data-grid={{ w: 1, h: 1, x: 0, y: 0 }}>
//               {item.title}
//             </div>
//           ))}
//         </ReactGridLayout>
//       </div>
//       <div>
//         <h3>Form</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//             </tr>
//           </thead>
//           <tbody>
//             {formItems.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </DndProvider>
//   );
// };

// export default Test;
