const mongoose = require('mongoose');
const db = require('../../config/db');


const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
});

adminTable = mongoose.model('adminTable', adminSchema);

//* create new admin

const CreateAdmin = async (data, callback) => {
    console.log(data);

    await adminTable.create(data, (err, res) => {
        if (err) return console.error(err);
        return callback(res);
    });
    // await adminData.save((err, data) => {
    //     if (err) throw err;
    //     return callback(data);
    // });

}

//* update admin

const UpdateAdmin = async (data, callback) => {

    const adminData = new adminTable(data);
    await adminData.findByIdAndUpdate((err, data) => {
        if (err) throw err;
        return callback(data);
    });
}


//* check if admin exists

const fetchAdmin = async (callback) => {

    const adminData = mongoose.find({});
    await adminData.exec((err, data) => {
        if (err) throw err;
        return callback(data)
    })
}

//* delete admin

const DeleteAdmin = async (data, callback) => { }




module.exports = { CreateAdmin, UpdateAdmin, fetchAdmin, DeleteAdmin };