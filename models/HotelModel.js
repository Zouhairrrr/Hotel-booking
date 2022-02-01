const mongoose = require('mongoose'); 
var  hotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Hotel must have a name']
    },
    description: {
        type: String,
        required: [true, 'Hotel must have a description']
    },
    localisation: {
        type: String,
        required: [true, 'Hotel must have a localisation']
    },
    // imageCover :{
    //     type: String,
    //     required: [true, 'Hotel must have an image']
    // },
    // images: [String]
});

const Hotel = mongoose.model('hotel', hotelSchema);

module.exports = Hotel;