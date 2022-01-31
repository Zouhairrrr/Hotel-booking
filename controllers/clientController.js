const User = require("../Models/User");
const bcrypt = require("bcryptjs");

const create = async (req, res) => {
  try {
    // check if email exist
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.json({ message: "Email is already exist" });
    // hashing password
    const password = "12345678";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    req.body.active = true;
    req.body.role = "client";
    // create new client
    const client = new User(req.body);
    await client.save();
    if (!client) return res.status(500).send("client not created");
    return res.status(200).send("client added successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    // update client
    const client = await User.findById(id);
      (client.name = req.body.name),
      (client.email = req.body.email),
      (client.role = req.body.role),
      (client.active = req.body.active),
      client
        .save()
        .then(() => {
          return res.status(200).send("client updated");
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const deleteClient = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await User.deleteOne({ _id: id });
    if (!client) return res.status(200).send("client not deleted");
    return res.status(200).send("client deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const allClient = async (req, res) => {
  try {
    const clients = await User.find({ role: "client" });
    if (!clients) return res.status(404).send("something went wrong");
    return res.status(200).send(clients);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const oneClient = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).send("something went wrong");
    return res.status(200).send(user);
  } catch (error) {}
};

module.exports = { create, update, deleteClient, allClient, oneClient };
