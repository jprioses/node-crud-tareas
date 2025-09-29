const express = require("express");
const cors = require("cors");
const path = require("path");

console.log("Welcome to API Rest CRUD tareas");

const app = express();
const port = 3900;

app.use(cors());

app.listen(port, console.log("Server is running on port: " + port));


//Parse body data from content-typ: application/json to json
app.use(express.json());
// Parse body data from form-url-encode data to json
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("client", { redirect: false }));

//Redirect all routes differents to above ones
app.get("/{*any}", function (req, res, next) {
  return res.sendFile(path.resolve("client/index.html"));
});