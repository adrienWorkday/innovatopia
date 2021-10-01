import React, { Component } from 'react'
import { Button } from "react-bootstrap"


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

      this.date = this.props.month + "/" + this.props.day + "/" + this.props.year;
      this.inOffice = false; // need to retrieve this value from Database!! CHANGE THIS

      this.inOrOutStyle = "success";
      
      if (!this.inOffice) { // change one to condition that checks if employee is set to in office or not
        this.setOrUnset = 'Set to "in office" on ' + this.date;
        this.inOrOutStyle = "success"
      }
      else {
        this.setOrUnset = 'Set to "out of office" on ' + this.date;
        this.inOrOutStyle = "warning"
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

 handleSetUnsetOffice(e) {
    e.preventDefault()
    console.log("Setting/Unsetting Employee in office...")
    try {
        // change value of in office of employee in DATABASE
    } catch {
        console.log("Error. Please try again.")
    }
}


 render() {
    return (
       <div class="employees-in-office">
          <div className="modal_content">
        <Button variant={this.inOrOutStyle} className="mt-3 m-2" onClick={this.handleSetUnsetOffice}>
                {this.setOrUnset}
        </Button>

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
       </div>
    )
 }

}

export default EmployeesInOffice