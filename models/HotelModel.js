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
    // imageCover :{
    //     type: String,
    //     required: [true, 'Hotel must have an image']
    // },
    // images: [String]
});

const Hotel = mongoose.model('hotel', hotelSchema);

// module.exports.getHotel = function(hotel, callback){
//     const query = {_id: hotel};
//     Hotel.findOne(query, callback);
// }

// module.exports.addHotel = function(newHotel, callback){
//     newHotel.save(callback);
// }

// module.exports.deleteHotel = function(hotel, callback){
//     const query = {
//         _id: hotel
//     };
//     Hotel.remove(query, callback);
// }

// module.exports.updateHotel = function(id, hotel, callback){
//     const query = {
//         _id: id
//     }
//     const update = {
//         name: hotel.name,
//         description: hotel.description
//     };
//     const options = { upsert: false, new: false, setDefaultsOnInsert: true };    
//     Hotel.update(query, update, options, callback);
// }

module.exports = Hotel;