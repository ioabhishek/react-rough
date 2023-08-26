import { useState } from "react";

const UpdatingObject = () => {
   const [position, setPosition] = useState({ x: 0, y: 0 });

   return (
      <div style={{ position: "relative", width: "100vw", height: "100vh"}} onPointerMove={(e) => {
         setPosition({x : e.clientX, y : e.clientY})
      }}>
         <div style={{position: "absolute", backgroundColor: "red", borderRadius:"50%", width: "20px", height:"20px", inset: 0, transform: `translate(${position.x}px,${position.y}px)`}}></div>
      </div>
   );
};

export default UpdatingObject;
