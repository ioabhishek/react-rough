import { Immer } from "immer";

const UseImmer = () => {

   const [person, serPerson] = useImmer({
      fname: "",
      lname: "",
      email: ""
   })

   function handleFname(e) {
      serPerson(draft => {
         draft.fname = e.target.value
      })
   }

   function handleLname(e) {
      serPerson(draft => {
         draft.lname = e.target.value
      })
   }

   function handleEmail(e) {
      serPerson(draft => {
         draft.email = e.target.value
      })
   }

   return (
      <>
         <label>
            First Name
            <input type="text" onChange={handleFname} placeholder="First name"/>
         </label><br />
         <label>
            Last Name
            <input type="text" onChange={handleLname} placeholder="Last name"/>
         </label><br />
         <label>
            Email
            <input type="text" onChange={handleEmail} placeholder="Email"/>
         </label><br />
         <div>{person.fname} {person.lname} {person.email}</div>
      </>
   )
}

export default UseImmer