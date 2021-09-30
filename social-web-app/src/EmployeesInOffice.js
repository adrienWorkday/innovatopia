import React, { Component } from 'react'

class EmployeesInOffice extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         employees: [
            { id: 1, name: 'Stefano Puzzuoli', email: 'stefano.puzzuoli@workday.com' },
            { id: 2, name: 'Test Test', email: 'test@email.com' },
            { id: 3, name: 'Test2 Test2', email: 'test2@email.com' },
            {id: 4, name: 'Test3 Test3', email: 'test3@email.com' }
         ]
      }
   }

   renderTableData() {
    return this.state.employees.map((employee, index) => {
       const { id, name, email } = employee //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
    let header = Object.keys(this.state.employees[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div class="employees-in-office">
          <h3 id='in-office-title'>Employees In Office</h3>
          <table class="content-table">
            <thead> 
                <tr>{this.renderTableHeader()}</tr>
            </thead>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }

}

export default EmployeesInOffice