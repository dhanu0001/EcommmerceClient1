import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("renders without crashing", () => {
  const div = document.createElement(div);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// import React from "react";
// var ReactTestUtils = require("react-dom/test-utils");
// // import ReactDOM from "react-dom";
// import App from "../App";

// it("renders without crashing", () => {
//   ReactTestUtils.isDOMComponent(App);
// });
