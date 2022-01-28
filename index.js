const express = require('express')
const mongoose = require('mongoose')
const adminRoute = require('./router/admin/adminRoute')
const db = require('./config/db')
// const bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/boocking-hotel')
    .then(console.log("connected"))
    .catch(err => console.log("error " + err))

const app = express();
// app.use(bodyParser.json())
app.use(express.json())





// * Admin route
app.use('/admin', adminRoute);




// app.use('/api/hotel', hotelRoute);
// app.use('/api/room', roomRoute);
// app.use('/api/booking', bookingRoute);



app.listen(3001, () => {
    console.log('server is runing at  http://localhost:3001');
});