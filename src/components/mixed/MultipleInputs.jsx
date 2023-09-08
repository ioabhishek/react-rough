import { useState } from "react";
import { useId } from "react";

const MultipleInputs = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setDetails((prev) => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={details.name} onChange={handleChange}/>
        </label>
        <label>
          Email
          <input type="email" name="email" value={details.email} onChange={handleChange}/>
        </label>
        <label>
          Password
          <input type="password" name="password" value={details.password} onChange={handleChange}/>
        </label>
        <label>
          Address
          <textarea type="text" name="address" value={details.address} onChange={handleChange}/>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultipleInputs;
