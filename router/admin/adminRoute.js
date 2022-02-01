const express = require('express');
const AdminRoute = express.Router();
const adminController = require('../../controllers/admin/adminController');


//*  Admin routes 

AdminRoute.post('/create', adminController.insertAdminForm );

// AdminRoute.get('/', adminController);
//* route for fetching admin by adminId
// AdminRoute.get('/get/:adminId', adminController);
// AdminRoute.get('/edit/:id', adminController);
// AdminRoute.post('/edit/:id', adminController);
// AdminRoute.get('/delete/:id', adminController);


module.exports = AdminRoute;