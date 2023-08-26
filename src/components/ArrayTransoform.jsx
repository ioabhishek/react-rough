import { useState } from "react";

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

const ArrayTransoform = () => {
  const [shapes, setShapes] = useState(initialShapes)

  return (
    <div className="shape_wrp">
      {shapes.map((shape, index) => (
        <div className={shape.type} key={index}></div>
      ))}
    </div>
  )
}

export default ArrayTransoform