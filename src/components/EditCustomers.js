import React from "react";
import { useState, useEffect } from "react";



const EditCustomer = (props) => {
 
  const [customer, setCustomer] = useState(props.currentCustomer)

  // Skipping when applying an effect, so when pressing edit button and want to edit other customer's information and allowing that edit button works.
  // useEffect calls back the function that updates the customer's info.
  useEffect(
    () => {
      setCustomer(props.currentCustomer)
    },
    [props]
  )

  const handleInputChange = (event) => {
    const {name, value } = event.target

    setCustomer({...customer, [name]: value})

  }
  
  
  return (
    <form className="edit-info"
      onSubmit={(event) => {
        event.preventDefault()
        
        props.updateCustomer(customer.id, customer)
      }}>
      <label>Name</label>
      <input type="text" name="name" value={customer.name} onChange={handleInputChange} />
      <label>Car registration</label>
      <input type="text" name="rego" value={customer.rego} onChange={handleInputChange}/>
      <label>Phone</label>
      <input type="text" name="phone" value={customer.phone} onChange={handleInputChange}/>
      <label>Service Date</label>
      <input type="text" name="serviceDate" value={customer.serviceDate} onChange={handleInputChange}/>
      <button>Update</button>
      <button
        onClick={() => props.setUpdating(false)}
      >
        Cancel
      </button>
    </form>
  )
}

export default EditCustomer
