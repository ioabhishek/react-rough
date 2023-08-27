import { useState } from "react"

const ArrayReplace = () => {
  const [counter, setCounter] = useState([0, 0, 0]);

  function handleCount(index) {
    const nextCounter = counter.map((count, i) => {
      if (i === index) {
        return count +1;
      } else {
        return count;
      }
    })

    setCounter(nextCounter)
  }

  return (
    <ul>
      {
        counter.map((count, i) => (
          <li key={i}>
            {count}
            <button onClick={() => {handleCount(i)}}>+1</button>
          </li>
        ))
      }
    </ul>
  )
}

export default ArrayReplace