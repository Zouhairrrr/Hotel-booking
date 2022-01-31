const mongoose = require("mongoose"); 

const ownerSchema = new mongoose.Schema(   {     
    name: { type: String, required: true, min: 6 },     
    email: { type: String, required: true, unique: true },     
    role: { type: String, required: true, enum: ["admin", "client", "owner"] },     
    password: { type: String, required: true, min: 8 },   },   {     timestamps: true,   } );  

const Owner = mongoose.model("Owner", ownerSchema); 

module.exports = Owner;