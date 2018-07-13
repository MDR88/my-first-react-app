import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"


ReactDOM.render((
    <Router>
        <KennelCompany />
    </Router>
), document.querySelector("#root"))

registerServiceWorker()