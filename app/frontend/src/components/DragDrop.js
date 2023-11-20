import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";

const PicureList = [
  {
    id: 1,
    url: "https://random.imagecdn.app/400/400/",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/400",
  },
  {
    id: 3,
    url: "https://random.imagecdn.app/400/400",
  },
];

const DragDrop = () => {
  const [board, setBoard] = useState([]);
  const [{isover}, drop] = useDrop(() => ({

    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
        
        isOver: !!monitor.isOver(),
   
}),
}));

const addImageToBoard = (id) => {
  console.log(id)
    const pictureList = PicureList.filter((picture) => id === picture.id)
    setBoard((board) => [...board, pictureList[0]]);
}
  return (
    <>
      <div className="Pictures">
        {PicureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
