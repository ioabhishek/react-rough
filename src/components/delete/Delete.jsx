import { nanoid } from "nanoid";
import { useState } from "react";

const Delete = () => {
  const [items, setItems] = useState(['Item1', 'Item2', 'Item3', 'Item4', 'Item5']);

  const handleDelete = (index) => {
    const updatedItems = [...items]
    updatedItems.splice(index, 1)
    setItems(updatedItems);
  }

  return (
    <div>
      <ul>
        {
          items.map((item, index) => (
            <li key={nanoid()}>
              {item}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Delete