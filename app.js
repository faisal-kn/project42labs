const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const studentRoute = require("./Routes/studentRoute");

const app = express();
app.use(cors());
app.options("*", cors());

app.use(express.json());
db.sequelize.sync();

app.get("/", (req, res, next) => {
  try {
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(404).json({ status: "failed" });
  }
});

app.use("/api/v1", studentRoute);

module.exports = app;
