const mongoose = require('mongoose')

module.exports = db = () => {

    mongoose.connect('mongodb://localhost:27017/boocking-hotel')
        .then(console.log("connected"))
        .catch(err => console.log("error " + err))

}