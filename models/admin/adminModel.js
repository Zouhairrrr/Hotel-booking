const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    // name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    // active: { type: Boolean, required: true, default: true }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
const adminTable = mongoose.model('adminTable', AdminSchema);

//* create new admin

const CreateAdmin = async (data, callback) => {
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
    const admin = await adminTable.findById(data);
    callback(null, admin);
}

//* find all admins
const findALLAdmin = async (callback) => {
    const findAdmin = await adminTable.find({});
    callback(null, findAdmin);
}

//* update admin
const UpdateAdmin = async (data, callback) => {
    const adminData = { data: data };
    await adminData.findByIdAndUpdate(adminData, callback);
}

//* delete admin
const DeleteAdmin = async (data, callback) => { }




module.exports = { CreateAdmin, UpdateAdmin, getAdmin, DeleteAdmin, findALLAdmin };



