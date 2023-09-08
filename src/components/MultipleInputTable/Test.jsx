import { useState } from 'react';

function DataSavingComponent() {
  const [inputData, setInputData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
  });
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDataSubmit = () => {
    // Create a new data item from the input data
    const newItem = { ...inputData };

    // Add the new item to the table data
    setTableData((prevTableData) => [...prevTableData, newItem]);

    // Clear the input fields
    setInputData({
      field1: '',
      field2: '',
      field3: '',
      field4: '',
      field5: '',
    });
  };

  return (
    <div>
      <input
        type="text"
        name="field1"
        value={inputData.field1}
        onChange={handleInputChange}
        placeholder="Enter Field 1"
      />
      <input
        type="text"
        name="field2"
        value={inputData.field2}
        onChange={handleInputChange}
        placeholder="Enter Field 2"
      />
      <input
        type="text"
        name="field3"
        value={inputData.field3}
        onChange={handleInputChange}
        placeholder="Enter Field 3"
      />
      <input
        type="text"
        name="field4"
        value={inputData.field4}
        onChange={handleInputChange}
        placeholder="Enter Field 4"
      />
      <input
        type="text"
        name="field5"
        value={inputData.field5}
        onChange={handleInputChange}
        placeholder="Enter Field 5"
      />
      <button onClick={handleDataSubmit}>Submit</button>

      <table>
        <thead>
          <tr>
            <th>Field 1</th>
            <th>Field 2</th>
            <th>Field 3</th>
            <th>Field 4</th>
            <th>Field 5</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.field1}</td>
              <td>{item.field2}</td>
              <td>{item.field3}</td>
              <td>{item.field4}</td>
              <td>{item.field5}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataSavingComponent;
