import { Route } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './LocationList'
import EmployeeList from './EmployeeList'
import AnimalList from './AnimalList'


export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LocationList} />
                <Route exact path="/animals" component={AnimalList} />
                <Route path="/employees" component={EmployeeList} />
            </React.Fragment>
        )
    }
}