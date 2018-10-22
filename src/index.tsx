import * as React from "react";
import * as ReactDOM from "react-dom";

import {MainComponent} from "./components/MainComponent";

ReactDOM.render(
    <MainComponent compiler="TypeScript" framework="React"/>,
    document.getElementById("example")
);
