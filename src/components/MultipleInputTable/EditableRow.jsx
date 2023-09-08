import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
  return (
    <tr>
      <td>
        <input type="text" name='name' value={editFormData.name} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="text" name='email' value={editFormData.email} onChange={handleEditFormChange}/>
      </td>
      <td>
        <input type="text" name="phone" value={editFormData.phone} onChange={handleEditFormChange}/>
      </td>
      <td>
        <button type='submit'>Save</button>
      </td>
    </tr>
  )
}

export default EditableRow