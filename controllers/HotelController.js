const console = require("console");
const Hotel = require("../models/HotelModel");

// Create Hotel
exports.createHotel = async (req, res, next) => {
    const images = req.files.map((file) => {
        return file.path
    })
    const {
        city,
        country
    } = req.body.localisation
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
            images: images,
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

// Get Hotel by name 
exports.getHotelbyname = async (req, res, next) => {
    const {
        name
    } = req.params;
    try {
        const hotel = await Hotel.findOne({
            name: new RegExp('^' + name + '$', "i")
        });
        res.status(200).json({
            status: "succes",
            data: hotel
        });
    } catch (err) {
        res.send(err);
    }
};


// Get Hotels by city
exports.getHotelbycity = async (req, res, next) => {
    try {
        const hotel = await Hotel.find({
            city: req.body.city,
        });
        res.status(200).json({
            status: "succes",
            data: hotel
        });
    } catch (err) {
        res.send(err);
    }
};