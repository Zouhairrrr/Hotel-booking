const express = require('express')
const mongoose = require('mongoose')
const adminRoute = require('./router/admin/adminRoute')
const db = require('./config/db')
// const bodyParser = require('body-parser')

const hotelRoute = require('./router/hotel');
const ownerRoute = require('./router/owner')
const app = express();
// app.use(bodyParser.json())
app.use(express.json())


app.use(express.json())

// * Admin route

app.use('/dashnbard/admin', adminRoute);
app.use('/hotels', hotelRoute);
app.use('/api/owner', ownerRoute);





const DB = 'mongodb://localhost:27017/booking';
mongoose.connect(DB).then(() => {
    app.listen(3001, () => {
        console.log('server is runing at  http://localhost:3001');
    });
    console.log('Connection Successed !!');
}).catch(err => {
    console.log(err);
});
