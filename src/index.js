import ReactDOM from "react-dom"
import React from 'react'
import Kennel from "./Kennel"
import Locations from './LocationList'
import EmployeeList from './EmployeeList'

ReactDOM.render( 
    <div>
      <EmployeeList />
        < Kennel / >
        < Locations / > 
    </div> ,
    document.querySelector("#root"));