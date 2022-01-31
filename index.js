const express = require('express')
 
const mongoose = require('mongoose')
const ownerRoute = require('./router/owner')



const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('inside the home')
})

// * Admin route
app.use('/api/owner', ownerRoute);
 
mongoose.connect('mongodb://127.0.0.1:27017/booking-hotel')
        .then(console.log("connected"))
        .catch(err => console.log("error " + err))


// app.use('/api/hotel', hotelRoute);
// app.use('/api/room', roomRoute);
// app.use('/api/booking', bookingRoute);



app.listen(3001, () => {
    console.log('server is runing at  http://localhost:3001');
});
