const express = require('express');
const AdminRoute  = express.Router();


AdminRoute.post('/', async (req, res) => { adminController.InsertAdmin(req, res); });


AdminRoute.get('/', () => require());

module.exports = AdminRoute;