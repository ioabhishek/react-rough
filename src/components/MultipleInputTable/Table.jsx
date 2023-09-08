import { nanoid } from "nanoid"
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Table = ({tableData, editContactId, handleEditClick, editFormData}) => {

  return (
    <form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((data)=> (
              <>
                {
                  editContactId === data.id ? (
                    <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>
                  ) : (
                    <ReadOnlyRow key={data.id} data={data} handleEditClick={handleEditClick}/>
                  )
                }
              </>
            ))
          }
        </tbody>
      </table>
    </form>
  )
}

export default Table