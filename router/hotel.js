const router = require('express').Router();
const hotelConroller = require('../controllers/HotelController');
const upload = require("../middleware/multer")

router.get('/hotel/:hotel', hotelConroller.getOneHotel);

router.get('/', hotelConroller.getHotels);

router.get('/:name', hotelConroller.getHotelbyname);

router.get('/city', hotelConroller.getHotelbycity);

router.post('/add', upload.array("images"), hotelConroller.createHotel);
// hotelConroller.uploadImage,

router.delete('/delete/:hotel', hotelConroller.deletHotel);

router.patch('/update/:hotel', hotelConroller.updateHotel);

module.exports = router;