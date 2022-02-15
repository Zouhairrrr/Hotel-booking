const models = require('../models/userModel')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const VerifyJwt = (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1]

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};




const CheckDuplicateUser = async (req, res, next) => {
    const { name } = req.body
    const m = await models.findOne({ name: name })
    if (m) return res.json({ user: " name already exists " })
    next();
}

const ValidatePassword = async (req, res, next) => {
    const { password } = req.body;
    if (password) {
        const noSpecialCharacters = password.replace(/[^a-zA-Z0-9 ]/g, '');
        //! console.log(noSpecialCharacters);
        if (noSpecialCharacters.length < 8) {
            // console.log(i);
            return res.json({ password: 'please enter a password higher than 8 characters' })
        } else if (noSpecialCharacters.length > 20) {
            return res.json({ password: 'please enter a password less than 20 characters' })
        }
        return next();

    } return res.json({ password: 'please enter a valid password' });
}

const CheckDuplicateEmail = async (req, res, next) => {
    const { email } = req.body;
    const m = await models.findOne({ email: email });
    if (m) return res.json({ message: " email already exists" })
    next();

}
const Restrictions = (req, res, next, ...roles) => {

    if (!roles.includes(req.user.role))
        return res.send(404)
    next()
}

module.exports = { VerifyJwt, CheckDuplicateUser, Restrictions, ValidatePassword, CheckDuplicateEmail };


