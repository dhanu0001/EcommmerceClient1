const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 8080;
console.log(port);
//Static file declaration
app.use(express.static(path.join(__dirname, "/build")));

//production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/build")));
//   //
//   app.get("*", (_, res) => {
//     res.sendFile(path.join(__dirname + "/build/index.html"));
//   });
// }

//build mode
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

//start server
app.listen(port, (_) => console.log(`server listening on port: ${port}`));
