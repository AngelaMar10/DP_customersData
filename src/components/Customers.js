import { useState } from 'react';
import CustomerTable from './components/CustomerTable'
import AddCustomer from './components/AddCustomer';
import './App.css';

const Customers = () => {

  // As I work with local storage I am using a framework to allocate an id for each customer, this will help in my delete function.
  const customersInfo = [
    { id:1, name: 'Mayra Lav', rego: "SA456YU", phone: "0455223344", serviceDate: "02/09/2021" },
    { id:2, name: 'Diego Smith', rego: "SA328TU", phone: "0455554899", serviceDate: "10/03/2022" }
  ]

  // Using useState with a previous information
  const [customers, setCustomers] = useState(customersInfo)

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