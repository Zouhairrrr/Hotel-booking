const express = require('express');
const router = express.Router();
const {allOwners, create, update, oneOwner, deleteOwner} = require('../controllers/ownerConroller')
 
router.get('/', allOwners);
router.post('/create', create);
router.put('/update/:id', update);
router.get('/:id', oneOwner);
router.delete('/delete/:id', deleteOwner);

module.exports = router;