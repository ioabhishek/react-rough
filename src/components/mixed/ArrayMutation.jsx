import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ArrayMutation = () => {
  const [item, setItem] = useState([])
  const [inpVal, setInpVal] = useState('')

  // const uid = uuidv4();
  // const suid = uid.slice(0,8)

  console.log('bhole')

  function handleAdd() {
    setItem([...item, inpVal])
  }

  return (
    <>
      <div>
        <input type="text" onChange={(e) => {setInpVal(e.target.value)}}/>
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {
          item.map((todo) => (
            <li>{todo}</li>
          ))
        }
      </ul>
    </>
  )
}

export default ArrayMutation