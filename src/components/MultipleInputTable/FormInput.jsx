import { useState } from "react";
import Table from "./Table";
import { nanoid } from "nanoid";


const MultipleInputTable = () => {
  const [details, setDetails] = useState({
    id: "",
    name: "",
    email: "",
    phone: ""
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: ""
  })

  const [tableData, setTableData] = useState([]);
  const [editContactId, setEditContactId] = useState(null)

  const handleEditFormChange = (e) => {
    const {name, value} = e.target;
    setEditFormData((prev) => {
      return {...prev, [name]: value}
    })
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setDetails((prev) => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {...details, id:nanoid()}
    console.log(newData)
    setTableData((prev) => [...prev, newData])
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id)
  }

  return (
    <>
      <form onSubmit = {handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={details.name} onChange={handleChange}/>
        <input type="text" placeholder="Email" name="email" value={details.email} onChange={handleChange}/>
        <input type="text" placeholder="Phone" name="phone" value={details.phone} onChange={handleChange}/>
        <button >Submit</button>
      </form>
      <Table tableData={tableData} editContactId={editContactId} handleEditClick={handleEditClick}/>
    </>
  )
}

export default MultipleInputTable