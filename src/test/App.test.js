import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Login from "../components/auth/Login";

it("renders without cashes", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
