import { useState } from "react";

const CrudUpdate = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 41 },
  ]);

  const [editId, setEditId] = useState(null);

  const handleEdit = (id) => {
    setEditId(id)
  }

  const handleUpdate = (id, field, newValue ) => {
    const updateData = tableData.map((item) => 
      item.id === id ? {...item, [field]:newValue} : item
    );
    setTableData(updateData);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          tableData.map((item) => (
            <tr key={item.id}>
              <td>
                {
                  editId === item.id ? (
                    <input 
                      type="text" 
                      value={item.name}
                      onChange={(e) => handleUpdate(item.id, 'name', e.target.value)}
                    />
                  ) : (
                    item.name
                  )
                }
              </td>
              <td>
                {
                  editId === item.id ? (
                    <input
                      type="text" 
                      value={item.age}
                      onChange={(e) => handleUpdate(item.id, 'age', e.target.value)}  
                    />
                  ) : (
                    item.age
                  )
                }
              </td>
              <td>
                {
                  editId === item.id ? (
                    <button
                      onClick={() => setEditId(null)}
                    >Save</button>
                  ) : (
                    <button
                      onClick={() => handleEdit(item.id)}
                    >Edit</button>
                  )
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default CrudUpdate