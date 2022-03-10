const mongoose = require('mongoose');
var hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Hotel must have a name']
    },
    description: {
        type: String,
        required: [true, 'Hotel must have a description']
    },
    localisation: {
        city: {
            type: String,
            required: [true, 'Hotel must have a city']
        },
        country: {
            type: String,
            required: [true, 'Hotel must have a coutry']
        }
    },
    price: {
        type: String,
        required: [true, 'Hotel must have a price']
    },
    stars: {
        type: String,
        required: [true, 'Hotel must have a stars']
    },
    images: [{
        type: String,
        required: [true, 'Hotel must have at least 4 images']
    }],
});

const Hotel = mongoose.model('hotel', hotelSchema);

module.exports = Hotel;