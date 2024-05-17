// dependency
// for posting
const express = require("express");
// for mongodb
const mongoose = require("mongoose");
//for pug
const path = require("path");

// for express-session
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

require("dotenv").config();

// importing student model
const students = require("./models/students.js");

// importing routes
const studentsRoutes = require("./routes/studentsRoutes");
const app = express();

// for static files in dir public
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// express session configurations
app.use(expressSession);


mongoose
  .connect(
    "mongodb+srv://mbabazieken:kashera2023@cluster0.x3cma6f.mongodb.net/daystar",
    {}
  )
  .then(() => console.log("mongodbconnected"))
  .catch(() => console.log("mongodb not connected"));

// for static files in dir public
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// routes setup. using the imported registration routes for requests
app.use("/", studentsRoutes);

app.listen(4500, () => {
  console.log("server is running on port 4500");
});
