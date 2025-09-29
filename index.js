const connection = require("./data/connection");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const TasksRoutes = require("./routes/tasks");

const path = require("path");

console.log("Welcome to API Rest CRUD tareas");

const app = express();
const port = 3900;

app.use(cors());

//connection();
connection.sync({ force: false }).then(() => {
  app.listen(port, console.log("Server is running on port: " + port));
});

//Parse body data from content-typ: application/json to json
app.use(express.json());
// Parse body data from form-url-encode data to json
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static("client", { redirect: false }));

app.use("/api/tasks", TasksRoutes);

//Redirect all routes differents to above ones
app.get("/{*any}", function (req, res, next) {
  return res.sendFile(path.resolve("client/index.html"));
});

//This middleware with error as parameter is the error handler function wich express is going to use
app.use(errorHandler);

//Get server to listen
//app.listen(port, () => {
//  console.log("Server listening in port " + port);
//});
