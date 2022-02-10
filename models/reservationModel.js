const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;


const reservationSchema = new mongoose.Schema(   {   
    fromeDate: { type: Date, required: true },     
    toDate: { type: Date, required: true },   
    payment: { type: String, required: true, enum: ["stripe", "paypal"] },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner' },
    chambreId: { type: Schema.Types.ObjectId, ref: 'Chambre' }, 
    chambre: { type: String, required: true},
 },   {timestamps: true,} );  


const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
