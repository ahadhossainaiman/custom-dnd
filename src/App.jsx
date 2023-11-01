import { useState } from "react";
import "./App.css";

function App() {
  const items = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];
  const [boxes, setBoxes] = useState(items);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
    console.log(e);
  };
  const handleDrop = (e, newIndex) => {
    const startIndex = e.dataTransfer.getData("index");
    const updatedBoxes = [...boxes];
    const [draggedBox] = updatedBoxes.splice(startIndex, 1);
    updatedBoxes.splice(newIndex, 0, draggedBox);
    setBoxes(updatedBoxes);
  };
  return (
    <>
      <div className="content">
        {boxes.map((box, index) => {
          return (
            <>
              <div
                className="box"
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={(e) => e.preventDefault()}
              >
                <p>{box.id}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
