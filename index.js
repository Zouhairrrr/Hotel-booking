const express = require("express");
const mongoose = require("mongoose");
const clientRoute = require("./router/client.routes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/booking-hotel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection Success.");
  })
  .catch((err) => {
    console.log(err.message);
  });

// * Client route
app.use("/clients", clientRoute);

// app.use('/api/hotel', hotelRoute);
// app.use('/api/room', roomRoute);
// app.use('/api/booking', bookingRoute);

app.listen(3001, () => {
  console.log("server is runing at  http://localhost:3001");
});
