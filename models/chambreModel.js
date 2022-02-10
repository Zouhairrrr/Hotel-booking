const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const ChambreSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner' },
    reservation: { type: Schema.Types.ObjectId, ref: 'Reservation' }, 
    created_at: {
        type: Date,
        default: Date.now
    }
});


const Reservation = mongoose.model("Chambre", ChambreSchema);

module.exports = Reservation;
