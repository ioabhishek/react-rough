const ReadOnlyRow = ({data, handleEditClick}) => {
  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td><button onClick={(e) => handleEditClick(event, data)}>Edit</button></td>
      </tr>
    </>
  )
}

export default ReadOnlyRow