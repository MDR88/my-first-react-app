import ReactDOM from "react-dom" //This pulls in REACT from the node module. This writes to the DOM.
import React from 'react' //Imported from the Node Module
import Kennel from "./Kennel" //This imports the Kennel.js module


//This is activating the ID for the div on the index file.
ReactDOM.render(<Kennel />, document.querySelector("#root"));