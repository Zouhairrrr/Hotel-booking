const express = require('express');
const router = express.Router();
const {allReserv, create} = require('../controllers/reserveController')
const { authenticated } = require('../middlewares/auth');
 
router.get('/', allReserv);
router.post('/create/:id', authenticated, create);


module.exports = router;