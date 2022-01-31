const router = require('express').Router();
// const Hotel = require('../models/HotelModel');
const hotelConroller = require('../controllers/HotelController');


router.get('/get/:hotel',hotelConroller.getOneHotel);

router.post('/add',hotelConroller.createHotel  );

router.delete('/delete/:hotel',hotelConroller.deletHotel);

router.patch('/update/:hotel',hotelConroller.updateHotel );

module.exports = router;