import { useState } from "react";

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

const ArrayTransoform = () => {
  const [shapes, setShapes] = useState(initialShapes)

  function handleMove() {
    const nextShapes = shapes.map((shape) => {
      if(shape.type === 'square') {
        return shape;
      } else {
        return {
          ...shape, y: shape.y + 50
        }
      }
    })

    setShapes(nextShapes);

    // shapes.map((shape) => {
    //   shape.type === 'circle' ? setShapes({...shape, y : shape.y + 50}) : setShapes(shape)
    // })
  }

  return (
    <>
      <button onClick={handleMove}>Move circle down</button>
      {shapes.map((shape, index) => (
        <div className={shape.type} key={index} style={{top: shape.y, left: shape.x}}></div>
      ))}
    </>
  )
}

export default ArrayTransoform