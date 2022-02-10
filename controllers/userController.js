const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) return res.json({ message: "Email is already exist" });
    const password = "12345678";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    req.body.active = true;
    const user = new User(req.body);
    await user.save();
    if (!user) return res.status(500).send("user not created");
    return res.status(200).send("user added successfully");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    (user.name = req.body.name),
      (user.email = req.body.email),
      (user.role = req.body.role),
      (user.active = req.body.active),
      user
        .save()
        .then(() => {
          return res.status(200).send("user updated");
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.deleteOne({ _id: id });
    if (!user) return res.status(200).send("user not deleted");
    return res.status(200).send("user deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(404).send("something went wrong");
    return res.status(200).send(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const oneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(404).send("something went wrong");
    return res.status(200).send(user);
  } catch (error) {}
};

module.exports = { createUser, updateUser, deleteUser, allUsers, oneUser };
