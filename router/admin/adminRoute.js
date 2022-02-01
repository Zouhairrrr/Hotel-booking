const express = require('express');
const AdminRoute = express.Router();
const adminController = require('../../controllers/admin/adminController');


//* route
//*  Admin routes 
AdminRoute.post('/', adminController.insertAdminForm);
AdminRoute.get('/', adminController.findAllAdmins)
AdminRoute.get('/:id', adminController.getAdmin);

//* AdminRoute.post('/:id', adminController.UpdateAdmin)
//* AdminRoute.delete('/:id', adminController.DeleteAdmin)



module.exports = AdminRoute;