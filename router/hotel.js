const router = require('express').Router();
const hotelConroller = require('../controllers/HotelController');


router.get('/hotel/:hotel', hotelConroller.getOneHotel);

router.get('/', hotelConroller.getHotels);

router.post('/add', hotelConroller.createHotel);

router.delete('/delete/:hotel', hotelConroller.deletHotel);

router.patch('/update/:hotel', hotelConroller.updateHotel);

module.exports = router;