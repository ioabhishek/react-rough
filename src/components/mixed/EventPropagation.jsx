const EventPropagation = () => {
   return (
      <div
         className="toolBar"
         onClick={() => {
            alert("Event Propagation main div");
         }}>
         <button
            className="button"
            onClick={(e) => {
               e.stopPropagation();
               alert("Playing");
            }}>
            Play
         </button>
         <button
            className="button"
            onClick={(e) => {
               e.stopPropagation();
               alert("Paused");
            }}>
            Paused
         </button>
      </div>
   );
};

export default EventPropagation;
