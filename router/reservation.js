const express = require('express');
const router = express.Router();
const {allReserv, create, deleteReservation} = require('../controllers/reserveController')
const { authenticated } = require('../middlewares/auth');
 
router.get('/', allReserv);
router.post('/create/:id', authenticated, create);
router.delete('/delete/:id', deleteReservation);


module.exports = router;