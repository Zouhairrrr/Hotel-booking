const express = require('express');
const AdminRoute = express.Router();
const adminController = require('../../controllers/admin/adminController');


//*  Admin routes 

AdminRoute.post('/', adminController.insertAdminForm );

module.exports = AdminRoute;