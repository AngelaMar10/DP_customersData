import React from "react";
import { useState } from "react";
// import {useForm} from 'react-hook-form'


const AddCustomer = (props) => {
  const initialInputState = { id: null, name: '', rego: '', phone: '', serviceDate: ''}
  const [customer, setCustomer] = useState(initialInputState)

  const handleInputChange = (event) => {
    const {name, value } = event.target

    setCustomer({...customer, [name]: value})

  }
  
  // using the hook to effectively add to the form I am using with the customers information, so I will have alert when a filed must be filled or there is an error.
  // const {register, errors, handleSubmit} = useForm();

  // const onSubmit = (data => {

  // })
  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault()
        if (!customer.name || !customer.rego || !customer.phone || !customer.serviceDate) return

        props.addCustomer(customer)
        setCustomer(initialInputState)
      }}>
      <label>Name</label>
      <input type="text" name="name" value={customer.name} onChange={handleInputChange} />
      <label>Car registration</label>
      <input type="text" name="rego" value={customer.rego} onChange={handleInputChange}/>
      <label>Phone</label>
      <input type="text" name="phone" value={customer.phone} onChange={handleInputChange}/>
      <label>Service Date</label>
      <input type="text" name="serviceDate" value={customer.serviceDate} onChange={handleInputChange}/>
      <button>Add Customer</button>
    </form>
  )
}

export default AddCustomer
