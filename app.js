const express = require("express");
const app = express();
const router = require("./router");
const { sequelize } = require("./models/models");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

sequelize.sync({ force: false }).then(() => {
  console.log("connet to mysql");
});

app.listen(3000, () => {
  console.log("express server start!");
});

module.exports = app;
