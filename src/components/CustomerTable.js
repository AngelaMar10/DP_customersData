import React from "react";
// import GeneratePDF from './pdf_generator'
import jsPDF from 'jspdf'

const CustomerTable = (props) => {

  console.log(props.customers)

  const generatePDF = () => {
    var doc = new jsPDF('p', 'pt');
    
    doc.save('demo.pdf')
  }      
    
    
  return (    
    <table>
      <div>
          <button onClick={generatePDF} type="primary">Download PDF</button> 
        </div>
      <thead>
        <tr>
          <th>Name</th>
          <th>Car registration</th>
          <th>Phone number</th>
          <th>Date of Service</th>
        </tr>
      </thead>
      <tbody>
        
        { 
          props.customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.rego}</td>
              <td>{customer.phone}</td>
              <td>{customer.serviceDate}</td>
              <td>
              
                <button className="edit-button"
                onClick={() => {
                  props.updateField(customer)
                }}
                >Edit</button>
                <button className="delete-button"
                // making an anonymous function here will prevent Onclick to exectue automatically
                onClick={() => props.deleteCustomer(customer.id)}
                >Delete</button>
              </td>
            </tr>

          ))
        }
      </tbody>
      
    </table>
    
  )
}

export default CustomerTable;