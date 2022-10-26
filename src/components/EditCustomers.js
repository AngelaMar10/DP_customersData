import React from "react";
import { useState } from "react";



const EditCustomer = (props) => {
  // const initialInputState = { id: null, name: '', rego: '', phone: '', serviceDate: ''}
  const [customer, setCustomer] = useState(props.currentCustomer)

  const handleInputChange = (event) => {
    const {name, value } = event.target

    setCustomer({...customer, [name]: value})

  }
  
  
  return (
    <form 
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
      <button>Update info</button>
      <button
        onClick={() => props.setUpdating(false)}
      >
        Cancel
      </button>
    </form>
  )
}

export default EditCustomer
