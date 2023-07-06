import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import DropContainer from './DropContainer';

const Test = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [savedItems, setSavedItems] = useState([]);

  const handleSave = () => {
    const itemNames = savedItems.map((item) => item.name);
    // Mở modal và hiển thị thông tin đã lưu
    setModalOpen(true);
    console.log(itemNames); // Thay bằng phần hiển thị modal thực tế
  };

  return (
    <div>
      <div>
        <h3>Phần 1: Các thẻ có thể kéo và thả</h3>
        <DraggableItem name="Thẻ 1" />
        <DraggableItem name="Thẻ 2" />
        <DraggableItem name="Thẻ 3" />
      </div>
      <div>
        <h3>Phần 2: Các thẻ đã được kéo</h3>
        <DropContainer setSavedItems={setSavedItems} />
      </div>
      <button onClick={handleSave}>Save</button>
      {modalOpen && (
        <div>
          <h3>Modal</h3>
          <table>
            <thead>
              <tr>
                <th>Tên thẻ</th>
              </tr>
            </thead>
            <tbody>
              {savedItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Test;
