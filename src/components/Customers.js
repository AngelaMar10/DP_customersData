import { useState } from 'react';
import CustomerTable from './CustomerTable';
import AddCustomer from './AddCustomer';
import './Customers.css';

const Customers = () => {

  // As I work with local storage I am using a framework to allocate an id for each customer, this will help in my delete function.
  const customersInfo = [
    { id:1, name: 'Mayra Lav', rego: "SA456YU", phone: "0455223344", serviceDate: "02/09/2021" },
    { id:2, name: 'Diego Smith', rego: "SA328TU", phone: "0455554899", serviceDate: "10/03/2022" }
  ]

  const initialInputState = { id: null, name: '', rego: '', phone: '', serviceDate: ''}

  //states
  // Using useState with a previous information
  const [customers, setCustomers] = useState(customersInfo)
  const [updating, setUpdating]= useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(initialInputState)
  


  // Function to add customers
  const addCustomer = (customer) => {
    customer.id = customers.length + 1
    setCustomers([
      //making a copy from customers (...)
      ...customers, customer])

  }
  // Function to delete customers
  const deleteCustomer = id => {
    setCustomers(customers.filter((customer) => customer.id !== id))
  }

  // Function to edit customers
  const updateCustomer = (id, updateCustomer) => {
    setUpdating(false)

    setCustomers(customers.map((customer) => (customer.id === id ? updateCustomer : customer)))
  }

  const updateField = customer => {
    setUpdating(true)

    setCurrentCustomer({ id: customer.id, name: customer.name, rego: customer.rego, phone: customer.phone, serviceDate: customer.serviceDate})
  }

  return (
    <div>
        <h1>DP Automotive services customers</h1>
          <div className="flex-row">
            <div className="flex-large">
              <h2>Add customer</h2>
              <AddCustomer 
                addCustomer={addCustomer}/>
            </div>
            <div className="flex-large">
              <h2>Customers Information</h2>
              {/* To pass the customers information, I use props */}
              <CustomerTable 
                customers={customers} 
                deleteCustomer={deleteCustomer}/>
            </div>
          </div>
    </div>
  )
}

export default Customers