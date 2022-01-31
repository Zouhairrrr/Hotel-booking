const mongoose = require('mongoose')

module.exports = db = () => {

    mongoose.connect('mongodb://127.0.0.1:27017/booking-hotel')
        .then(console.log("connected"))
        .catch(err => console.log("error " + err))

}