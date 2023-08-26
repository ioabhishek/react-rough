import { useState } from "react";

const TrafficLight = () => {
   let [signal, setSignal] = useState("Walk");

   function handleStop() {
      setSignal("Stop");
      alert("Stop is next");
   }

   function handleWalk() {
      setSignal("Walk");
      alert("Start is next");
   }

   return (
      <>
         <button
            onClick={() => {
               signal == "Walk" ? handleStop() : handleWalk();
            }}>
            Change To {signal == "Walk" ? "Stop" : "Walk"}
         </button>
         <h2 style={{ color: signal === "Walk" ? "green" : "red" }}>
            {signal}
         </h2>
      </>
   );
};

export default TrafficLight;
