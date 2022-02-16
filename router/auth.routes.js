const express = require('express');
const Router = express.Router();
const middleware = require('../middleware/auth.middlewares');
const authController = require('../controllers/auth.controller')

Router.post('/register',
    [
        //! valudate user informations before creating
        middleware.CheckDuplicateUser,
        middleware.CheckDuplicateEmail,
        middleware.ValidatePassword
    ],
    //* create new User instance
    authController.CreateNewUser
);

Router.post('/login', middleware.ValidatePassword, authController.Authenticate);



Router.post('/api/add-hotel',  )

module.exports = Router;