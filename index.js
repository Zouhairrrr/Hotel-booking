const express = require("express");
const mongoose = require("mongoose");

const hotelRoute = require("./router/hotel");
const ownerRoute = require("./router/owner");
const clientRoute = require("./router/client");
const roomRoute = require("./router/room");

const app = express();
app.use(express.json());

app.use("/hotels", hotelRoute);
app.use("/owners", ownerRoute);
app.use("/clients", clientRoute);
app.use("/rooms", roomRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/booking-hotel")
  .then(() => {
    app.listen(3001, () => {
      console.log("server is runing at  http://localhost:3001");
    });
    console.log("Connection Successed !!");
  })
  .catch((err) => {
    console.log(err);
  });
