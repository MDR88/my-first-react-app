import React, { Component } from 'react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import LoationList from "./LocationList" // Import EmployeeList component


export default class Kennel extends Component {
    render() {
        return (
            <div>
               <h3>Student Kennels</h3>
                <EmployeeList />
                <LoationList />
            </div>
        );
    }
}