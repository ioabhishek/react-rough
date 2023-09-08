import React from 'react'

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input type="text" name='name' />
      </td>
      <td>
        <input type="text" name='email' />
      </td>
      <td>
        <input type="text" name="phone" />
      </td>
    </tr>
  )
}

export default EditableRow