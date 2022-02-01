const Admin = require('../../models/admin/adminModel')


//? admin Insert to database

const insertAdminForm = async (req, res) => {
    const bodyData = req.body;
    // console.log("aaa");
    await Admin.CreateAdmin(bodyData, (error, data) => {
        if (error) {
            console.log('ERROR => ' + error);
            return res.sendStatus(500).json(error);
        }
        res.send(data);
    })
}

//? get admin if exists

const getAdmin = async (req, res) => {
    const adminEmail = req.params.email;
    // const bodyData = req.body;
    try {
        await Admin.getAdmin(adminEmail, (data) => res.send(data));
        // console.log(adminEmail);
    } catch (error) {
        console.log('ERROR geting admin ' + error);
        return res.sendStatus(500).json(error);
    }
}



const UpdateAdmin = async (req, res) => {
    const bodyData = req.body;
    try {
        await Admin.CreateAdmin(bodyData, (data) => res.send(data));

    } catch (error) {
        console.log('ERROR createing admin => ' + error);
        return res.sendStatus(500).json(error);
    }
}


module.exports = { insertAdminForm, UpdateAdmin, getAdmin };