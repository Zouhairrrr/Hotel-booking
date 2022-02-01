const express = require('express')
const mongoose = require('mongoose')
const db = require('./config/db')
const app = express();

//? admin Route:
const adminRoute = require('./router/admin/adminRoute')

//? user Route: 
//! const userRoute = require('./router/userRoute')

// const bodyParser = require('body-parser')




mongoose.connect(db.database)


mongoose.connection.on('connected', () => {
    console.log('db connection established' + db.database);
});
mongoose.connection.on('error', (err) => {
    console.log('error connecting to database' + err);
})

// app.use(bodyParser.json())
app.use(express.json())



//* define all users route:

app.use('/admin', adminRoute);



app.listen(3002, () => {
    console.log('server is runing at  http://localhost:3002');
});