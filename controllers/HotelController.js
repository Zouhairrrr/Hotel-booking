const Hotel = require("../models/HotelModel");
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     },
// });
// const uploadImage = multer({
//     storage: storage
// }).single('imageCover');

// Upload Image (Doesn't Work !!)
// exports.uploadImage = async (req, res, next) => {
//     try {
//         const imageCover = await imageCover.uploads({

//             imageCover: req.file.path,

//         });

//         res.status(200).json({
//             status: "success Upload",
//             // data: imageCover
//         });

//     } catch (err) {
//         console.log(err);
//     }
//     next();

// }
// Create Hotel
exports.createHotel = async (req, res, next) => {
    console.log(req.body.localisation);
    const {
        city,
        country
    } = req.body.localisation
    console.log(req.body.stars);
    try {
        const hotel = await Hotel.create({
            name: req.body.name,
            description: req.body.description,
            localisation: {
                city,
                country
            },
            price: req.body.price,
            starts: req.body.stars,
            // imageCover: req.file.path,
            // images: req.body.images,
        });

        res.status(200).json({
            status: "success",
            data: hotel
        });
    } catch (err) {
        console.log(err);
    }

}

// Get one hotel by ID
exports.getOneHotel = async (req, res, next) => {

    const id = req.params.hotel;
    try {
        const hotel = await Hotel.findById(id);
        res.status(200).json({
            status: "succes",
            data: hotel
        });
    } catch (err) {
        res.send(err);
    }
};

// Get All hotels 
exports.getHotels = async (req, res, next) => {

    try {
        const hotels = await Hotel.find();
        res.status(200).json({
            status: "succes",
            data: hotels
        });
    } catch (err) {
        res.send(err);
    }
};

// Update Hotel
exports.updateHotel = async (req, res, next) => {
    const id = req.params.hotel;
    try {
        const hotel = await Hotel.findById(id);
        Object.assign(hotel, req.body);
        hotel.save();
        return res.send({
            message: hotel
        });
    } catch (error) {
        console.log(error);
    }
};


// Delete Hotel
exports.deletHotel = async (req, res, next) => {
    const id = req.params.hotel;
    try {
        const hotel = await Hotel.findById(id);
        await hotel.remove();
        res.send();
    } catch (err) {
        res.send(err);
    }
};