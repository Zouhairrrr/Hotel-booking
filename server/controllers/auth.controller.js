const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config/config')


//  * create new user with a client default as role 


const CreateNewUser = async (req, res) => {
    // * console.log(bodyData)   //check if data exists
    const bodyData = req.body;
    if (!(bodyData.email && bodyData.password)) {
        return res.status(400).send({ error: "Email and passwor is required" });
    }
    const salt = await bcrypt.genSalt(10);
    //! now we set user password to hashed password
    bodyData.password = await bcrypt.hash(bodyData.password, salt);
    await userModel.create(bodyData, (err, response) => {
        if (err) {
            console.log('ERR => ' + err);
            return res.sendStatus(500).json(err);
        } else {
            const { _doc } = response
            const token = jwt.sign({
                id: _doc._id,
                role: _doc.role,
            }, config.secret)
            return res.send({ ..._doc, token });
        }
        // next();
    })

}
const Authenticate = async (req, res) => {

    try {
        const bodyData = req.body;
        const user = await userModel.findOne({ email: bodyData.email });
        if (!user) return res.sendStatus(500).json({ login: false })
        const isValid = bcrypt.compareSync(bodyData.password, user.password)
        if (!isValid) { return res.json({ message: "login or email wrong" }) }
        else {
            const { _doc } = user
            const token = jwt.sign({
                id: _doc._id,
                role: _doc.role,
            }, config.secret)
            return res.send({ ..._doc, token });
        }
        
    } catch (error) {
        console.log('ERROR => ' + error);
        return res.sendStatus(500).json(error);
    }
};






module.exports = { CreateNewUser, Authenticate };