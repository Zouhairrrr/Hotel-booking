const express = require('express');
const authRouter = express.Router();
const middleware = require('../middleware/auth.middlewares');
const authController = require('../controllers/auth.controller')

//? const RouteGroup = require('express-route-grouping')

authRouter.post('/register',
    [
        //! valudate user informations before creating
        middleware.validateForm,
        middleware.CheckDuplicateUser,
        middleware.CheckDuplicateEmail,
        middleware.ValidatePassword
    ],
    //* create new User instance
    authController.CreateNewUser
);


authRouter.post('/login',
    [
        middleware.validateFormLogin,
        middleware.ValidateEmailLogin,
        middleware.ValidatePasswordLogin,
    ],
    authController.Authenticate);

// ?  routes for resetPassword

authRouter.post('/forgotPassword',
    [
        middleware.ValidateemailforPaswwordReset
    ],
    authController.ForgotPassword);

authRouter.get('/activateAccount/:token', authController.ActivatePassword);


authRouter.post('/password-reset',
    [
        middleware.PasswordValidate,
        middleware.ConfirmPassword,
    ]
    , authController.ResetPassword);

// authRouter.post('/reset-password', authController.ActivateAcount);


module.exports = authRouter;