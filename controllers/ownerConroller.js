const bcrypt = require("bcryptjs");
const User = require("../models/User");

const allOwners = async (req, res) => {
  const owners = await User.find({ role: "owner" }).catch((e) =>
    console.log(e)
  );
  return res.status(200).send(owners);
};

const create = async (req, res) => {
  try {
    const ownerchek = await User.findOne({ email: req.body.email });
    if (ownerchek) return res.json({ message: "Email is already exist" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const owner = new User({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: hashedPassword,
    });
    const savedOwner = await owner.save();
    res.status(200).send({ owner: savedOwner });
  } catch (e) {
    res.status(400).send({
      status: "Failed",
      msg: e,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;

    const owner = await User.findById(id);
    (owner.name = req.body.name),
      (owner.email = req.body.email),
      (owner.role = req.body.role),
      (owner.active = req.body.active),
      owner
        .save()
        .then(() => {
          return res.status(200).send("owner updated");
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const oneOwner = async (req, res) => {
  try {
    const id = req.params.id;
    const owner = await User.findById(id);
    if (!owner) return res.status(404).send("something went wrong");
    return res.status(200).send(owner);
  } catch (error) {}
};

const deleteOwner = async (req, res) => {
  try {
    const id = req.params.id;
    const owner = await User.deleteOne({ _id: id });
    if (!owner) return res.status(200).send("owner not deleted");
    return res.status(200).send("owner deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  create,
  allOwners,
  update,
  oneOwner,
  deleteOwner,
};
