const express = require('express')
const adminRoute = require('./router/admin/adminRoute')



const app = express();
app.use(express.json())



// * Admin route
app.use('/dashnbard/admin', adminRoute);




// app.use('/api/hotel', hotelRoute);
// app.use('/api/room', roomRoute);
// app.use('/api/booking', bookingRoute);



app.listen(3001, () => {
    console.log('server is runing at  http://localhost:3001');
});