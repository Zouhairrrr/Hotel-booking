const mongoose = require('mongoose');
const db = require('../../config/db');


const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
});

adminTable = mongoose.model('adminTable', adminSchema);

//* create new admin

const CreateAdmin = async (data, callback) => {
    // console.log(data);
    // data = req.body
    try {
        const admin = await adminTable.create(data);
        // throw Error('Error creating admin')
        callback(null, admin);

    } catch (error) {
        callback(error)
    }
}

//* get if admin exists

const getAdmin = async (data, callback) => {

    // const adminEmail = { email: email };
    try {
        await adminData.findOne(data, callback);
    } catch (error) {
        console.log(error);
    }
}



//* update admin

const UpdateAdmin = async (data, callback) => {
    const adminData = { data: data };
    await adminData.findByIdAndUpdate(adminData, callback);
}

//* delete admin

const DeleteAdmin = async (data, callback) => { }




module.exports = { CreateAdmin, UpdateAdmin, getAdmin, DeleteAdmin };



