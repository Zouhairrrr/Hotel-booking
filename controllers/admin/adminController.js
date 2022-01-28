const Admin = require('../../models/admin/adminModel')

const insertAdminForm = async (req, res) => {
    const bodyData = req.body;
    try {
        await Admin.CreateAdmin(bodyData, function (data) { res.send(data) });

    } catch (error) {
        console.log('ERROR => ' + error);
        return res.sendStatus(500).json(error);
    }
}


const UpdateAdmin = async (req, res) => {
    const bodyData = req.body;
    try {
        await Admin.CreateAdmin(bodyData, (data) => res.send(data));

    } catch (error) {
        console.log('ERROR => ' + error);
        return res.sendStatus(500).json(error);
    }
}
module.exports = insertAdminForm, UpdateAdmin;