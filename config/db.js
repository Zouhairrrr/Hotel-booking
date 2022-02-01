const mongoose = require("mongoose");

module.exports = db = () => {
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
};
