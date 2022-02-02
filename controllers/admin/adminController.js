const Admin = require('../../models/admin/adminModel')


//* admin Insert to database

const insertAdminForm = async (req, res) => {
    const bodyData = req.body;
    await Admin.CreateAdmin(bodyData, (error, data) => {
        if (error) {
            console.log('ERROR => ' + error);
            return res.sendStatus(500).json(error);
        }
        res.send(data);
    })
}

//* get admin if exists

const getAdmin = async (req, res) => {
    const adminId = req.params.id;
    await Admin.getAdmin(adminId, (err, response) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(response);
        }
    });
}

//! find all admin 

const findAllAdmins = async (req, res) => {
    await Admin.findALLAdmin((err, response) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(response);
        }
    });
}

//? update admin 

const UpdateAdmin = async (req, res) => {
    
    const bodyData = req.body;
    await Admin.CreateAdmin(bodyData, (data) => res.send(data));
}


module.exports = { insertAdminForm, UpdateAdmin, getAdmin, findAllAdmins };