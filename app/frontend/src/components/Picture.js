import React from 'react'
import { useDrag } from 'react-dnd'
const Picture = ({id, url}) => {
    const [{isDragging}, drag] = useDrag(() => ({
    
    type:"image",
    item: {id: id},
    collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
    }),
    
    }));
  return <img
  className='img'
  ref={drag}
   src={url} 
   width="150px"
    style={{boxShadow: isDragging ? "1px 1px 20px 1px gray" : "0px" }}
   />
  
}

export default Picture