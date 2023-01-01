import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app";

// we do this to ensure the react code can interact with the properly rendered DOM 
// and avoid 'target container is not a DOM element error
// see https://stackoverflow.com/questions/26416334/react-error-target-container-is-not-a-dom-element
window.onload = (ev: any)=> {
    ReactDOM.render(<App prop={"Kiran"} />, document.getElementById('root'));
}

