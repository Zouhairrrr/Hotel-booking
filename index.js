const express = require('express');
const mongoose = require('mongoose');
const adminRoute = require('./router/admin/adminRoute');
const hotelRoute = require('./router/hotel');



const app = express();
app.use(express.json())



// * Admin route
app.use('/dashnbard/admin', adminRoute);
app.use('/hotels', hotelRoute);
// * Hotel route
// app.use('/', )


// app.use('/api/hotel', hotelRoute);
// app.use('/api/room', roomRoute);
// app.use('/api/booking', bookingRoute);

const DB = 'mongodb://localhost:27017/booking';
mongoose.connect(DB).then(() => {
    app.listen(3001, () => {
        console.log('server is runing at  http://localhost:3001');
    });
    console.log('Connection Successed !!');
}).catch(err => {
    console.log(err);
});

