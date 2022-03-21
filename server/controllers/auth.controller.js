const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');
dotenv.config()
const SendEmail = require('./services/mail')
//  * create new user with a client default as role 
const CreateNewUser = async (req, res) => {

    const data = req.body;
    //* now we set user password to hashed password
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    await userModel.create(data, (err, response) => {
        if (err) {
            console.log('ERR => ' + err);
            return res.status(400).json(err);
        } else {
            return res.status(200).json({ success: true, message: 'created successfully ^_^', data: response });
        }
    })
}

const Authenticate = async (req, res) => {
    try {
        const jwtExpirySeconds = 300
        const bodyData = req.body;
        const user = await userModel.findOne({ email: bodyData.email })
        if (!user) return res.status(500).json({ success: false, message: "user dosent exist" })
        const isValid = bcrypt.compareSync(bodyData.password, user.password)
        if (isValid) {
            const token = jwt.sign(
                {
                    id: user._id,
                    name: user.name
                },
                process.env.ACCESS_TOKEN_SECRET, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
            }
            )
            return res.status(200).json({ success: true, message: "Login succeeded", data: { token } });
        } else {
            return res.status(401).json({
                success: false,
                message: "Password dosen't match",
            })
        }
    } catch (error) {
        console.log('ERROR => ' + error);
        return res.status(500).json(error);
    }
};


const ForgotPassword = async (req, res) => {
    const email = req.body.email;
    const subject = "Reset Password"
    try {
        const user = await userModel.findOne({ email: email })
        if (!user) return res.status(401).json({ success: false, message: "user does not exist" })
        // * get user email 
        const secret = process.env.ACCESS_TOKEN_SECRET;
        let payload = {
            id: user._id,
        };
        const token = jwt.sign(payload, secret, { expiresIn: '10m' })
        const link = `http://localhost:3000/auth/activateAccount/${token}`;
        console.log(link);
        const text = `<p>This link is valide one time only <a href ="${link}">Reset your Password</a></p>`;
        const data = await SendEmail(process.env.EMAIL, subject, text);
        if (data) return res.status(200).json({ success: true, message: 'email sent successfully check your email address' })
    } catch (error) {
        return res.status(500).json({ success: false, message: "something went wrong when sending email please try again" })
    }
}

const ResetPassword = async (req, res) => {


    const data = req.body;
    const user = await userModel.find({ id: data._id });

    // const token = req.headers["authorization"].split(" ")[2]
    // const id = req.headers["authorization"].split(" ")[1]
    // console.log(id);
    // console.log(req.params);
    // if (!token)console.log("eeeee") 
    // return res.status(400).json({ success: false, message: "invalid link or expired" });
    // const secret = process.env.ACCESS_TOKEN_SECRET ;
    // try {
    //     const paylod = jwt.verify(token, secret)

    // } catch (error) {
    //     console.log(error.message);
    //     res.status(401).json({ success: false, message: "invialide token"});
    // }


    // const decoded = jwt.verify(token, secret, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // });

    // console.log(secret);
    // if (token) {
    //     jwt.verify(resetLink, process.env.ACCESS_TOKEN_SECRET)
    // }
    // User.findOne({ email: email }, (err, user) => {
    //     if (err || !user) {
    //         return res.status(401).json({ success: false, message: "email wrong" });
    //     }
    // });

}
const ActivatePassword = async (req, res) => {
    const { token } = req.params;
    const jwtExpirySeconds = 300
    if (!token) {
        return res.status(401).json({ success: false, message: "Token is not Provided" })
    }
    try {
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        })
        const user = await userModel.findOne({ id: payload._id })
        return res.status(200).json({ success: true, message: 'redirect ...', data: user })
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {

            //* if the error thrown is because the JWT is unauthorized, return a 401 error
            return res.status(401).json({ success: false, message: "Invalid token please try again" });
        }
    }
}

module.exports = { CreateNewUser, Authenticate, ForgotPassword, ResetPassword, ActivatePassword };