import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Element from "../components/main/Element"
import { useDrop } from "react-dnd";
import DraggableElement from "../components/main/DraggableElement";


const ElementList = [
    { id: 1, type: "input", text: "Input" },
    { id: 2, type: "button", text: "Button" },
    { id: 3, type: "label", text: "Label" },
    { id: 4, type: "textarea", text: "Text area" },
    { id: 5, type: "checkbox", text: "Check box" },
    { id: 6, type: "number", text: "Number" },
    { id: 7, type: "calculated", text: "Calculated" },
    { id: 8, type: "radio", text: "Radio button" },
    { id: 9, type: "attachfile", text: "Attach file" },
    { id: 10, type: "link", text: "Link" },
    { id: 11, type: "table", text: "Table" },
    { id: 12, type: "date", text: "Date" },
    { id: 13, type: "time", text: "Time" },
    { id: 14, type: "drop", text: "Drop down" },
  
    // Thêm các thành phần khác nếu cần
  ];

export default function FormPage() {

    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
      accept: ["input", 
              "label",
              "checkbox",
              "textarea",
              "number",
              "calculated",
              "radio",
              "attachfile",
              "link",
              "table",
              "date",
              "time",
              "drop"
            ], // Chấp nhận các loại type mới
      drop: (item, monitor) => addElementToBoard(item, monitor),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
  
    // const addElementToBoard = (id) => {
    //   const elementList = ElementList.filter((element) => id === element.id);
    //   setBoard((board) => [...board, elementList[0]]);
    // };
    const addElementToBoard = (item, monitor) => {
      const elementList = ElementList.filter((element) => item.id === element.id);
      const newItem = {
        ...elementList[0],
        position: monitor.getClientOffset(),
      };
      setBoard((board) => [...board, newItem]);
    };
  
    const handleDrop = (id, rowIndex, colIndex) => {
      const updatedBoard = board.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            position: { rowIndex, colIndex },
          };
        }
        return element;
      });
      setBoard(updatedBoard);
    };

  return (
    <div className="home">       
      <div className="Elements">
            <div className="button">
              <Button variant="contained" color="success" className="save-btn">
                Save form
              </Button>
          </div>
        <div
        style={{
          height: "630px",
          overflow: "scroll",
        }}>
          {ElementList.map((element) => (
            <Element
              key={element.id}
              id={element.id}
              type={element.type}
              text={element.text}
            />
            
            
          ))}
        </div>
      </div>
      <div className="Board" ref={drop}>
        {board.map((element) => (
          <DraggableElement          
            key={element.id}
            id={element.id}
            type={element.type}
            text={element.text}
            position={element.position}
            handleDrop={handleDrop}
          />
        ))}
      </div>
     
    </div>
  )
}
