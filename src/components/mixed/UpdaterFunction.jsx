import { useState } from "react"

const UpdaterFunction = () => {
   const [count, setCount] = useState(0);
   console.log("im")
   return (
      <>
         <div>{count}</div>
         <button onClick={() => {
            setCount(count + 1); //(count => count + 1) is called as updater function
            setCount(count => count + 1);
            setCount(count => count + 1); 
         }}>Increase Count</button>
      </>
   )
}

export default UpdaterFunction