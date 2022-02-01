const Hotel = require("../models/HotelModel");

// Create Hotel
exports.createHotel = async (req, res, next) => {

    try {
        const hotel = await Hotel.create({
            name: req.body.name,
            localisation: req.body.localisation,
            description: req.body.description,
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