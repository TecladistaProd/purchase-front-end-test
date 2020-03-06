import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import App from "./App";

import server from "./mock/server";

server();

ReactDOM.render(<App />, document.getElementById("root"));
