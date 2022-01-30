const router = require('express').Router();

const hotelConroller = require('../controllers/HotelController');

router.post('/create', hotelConroller.createHotel);

router.get('/', hotelConroller.showHotels);

module.exports = router;