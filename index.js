const express = require('express')

const app = express();
app.use(express.json())





// app.use(bodyParser.json());

// app.use('/api/user', userRoute);
// app.use('/api/hotel', hotelRoute);
// app.use('/api/room', roomRoute);
// app.use('/api/booking', bookingRoute);



app.listen(3001, () => {
    console.log('server is runing at  http://localhost:3001');
});