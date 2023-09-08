import { useState } from "react"

const StateRender = () => {
   const [to, setTo] = useState('');
   const [message, setMessage] = useState('');
   console.log(to, message)

   function handleSend() {
      alert(`You have said Hello from ${message} to ${to}`)
      console.log(to, message)
   }

   return (
      <>
         <label>
            To: 
            <select value={to} onChange={(e) => setTo(e.target.value)}>
               <option value="Alice">Alice</option>
               <option value="Bob">Bob</option>
            </select>
         </label>
         <textarea value={message} cols="10" rows="4" placeholder="Hello" onChange={(e) => setMessage(e.target.value)}/>
         <button onClick={handleSend}>Send</button>
      </>
   )
}

export default StateRender