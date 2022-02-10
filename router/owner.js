const express = require('express');
const router = express.Router();
const {allOwners, create, update, oneOwner, deleteOwner, login} = require('../controllers/ownerConroller');
const { authenticated } = require('../middlewares/auth');
 
router.get('/', allOwners);
router.post('/create', create);
router.put('/update/:id', update);
router.get('/:id', oneOwner);
router.delete('/delete/:id', deleteOwner);
router.post('/login', login);

module.exports = router;