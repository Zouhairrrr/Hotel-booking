const req = require('express/lib/request')
const res = require('express/lib/response')
const Owner = require('../models/ownerModel')
require("dotenv").config();
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const allOwners = async (req,res)=>{
    const owners = await Owner.find({role: "owner"}).catch(e=>console.log(e));
    return res.status(200).send(owners);
    
}

const create = async (req, res) =>{

    const ownerchek = await Owner.findOne({ email: req.body.email });
    if (ownerchek) return res.json({ message: "Email is already exist" });
 
     
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

   const owner = new Owner({
       name : req.body.name,
       email : req.body.email,
       role : req.body.role,
       password : hashedPassword
   });
 

   try {
       const savedOwner = await owner.save();
       res.status(200).send({owner: savedOwner})
   } catch (e){
       res.status(400).send({
           status: "Failed",
           msg: e
       })
   }
}



const update = async (req, res) => {
    try {
      const id = req.params.id;
      
      const owner = await Owner.findById(id);
        (owner.name = req.body.name),
        (owner.email = req.body.email),
        (owner.role = req.body.role),
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
      const owner = await Owner.findById(id);
      if (!owner) return res.status(404).send("something went wrong");
      return res.status(200).send(owner);
    } catch (error) {}
  };

  const deleteOwner = async (req, res) => {
    try {
      const id = req.params.id;
      const owner = await Owner.deleteOne({ _id: id });
      if (!owner) return res.status(200).send("owner not deleted");
      return res.status(200).send("owner deleted");
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  };


  const login = async (req, res) => {
    const owner = await Owner.findOne({email : req.body.email,})
    if (!owner) return res.status(400).send("Email is not exists")

    const validPass = await bcrypt.compare(req.body.password, owner.password);
    if (!validPass) return res.status(400).send("Password invalid")

    const token = JWT.sign({id : owner._id, name: owner.name, email: owner.email}, process.env.TOKEN_SECRET)
    res.header("auth-token", token).send(token)
  }

module.exports ={
    create,
    allOwners,
    update,
    oneOwner,
    deleteOwner,
    login,
}