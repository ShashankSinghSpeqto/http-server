const express = require("express");
const helmet = require("helmet");
const routes = require("./routes/v1");

const app = express();

app.use(helmet());

app.use("/v1", routes);

module.exports = app;
