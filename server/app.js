"use strict";

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const server = require("http").Server(app);
const io = require("socket.io")(server);

const errorHandler = require("./middlewares/error-handler");
const indexRouter = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// socket.io
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/api", indexRouter);
app.use(errorHandler);

server.listen(port, () => {
  console.log(`Sunday E-Commerce API is running on PORT ${port}!`);
});

// app.listen(port, () => {
//   console.log(`Sunday E-Commerce API is running on PORT ${port}!`);
// });

module.exports = app;