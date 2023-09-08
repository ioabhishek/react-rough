import { useState } from "react"

const Counter = () => {
   const [count, setCount] = useState(0);

   return (
      <>
         <div>{count}</div>
         <button onClick={() => setCount(count + 3)}>+3</button>
      </>
   )
}

export default Counter