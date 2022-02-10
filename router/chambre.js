const express = require('express');
const router = express.Router();
const {allChambre, create,} = require('../controllers/chambreController')
 
router.get('/', allChambre);
router.post('/create', create);


module.exports = router;