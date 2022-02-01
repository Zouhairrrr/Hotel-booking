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
exports.getOneHotel = (req, res, next) => {

    const hotel = req.params.hotel;
    Hotel.getHotel(hotel, (err, response) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: "No such hotel exists"
            });
        } else {
            res.json({
                success: true,
                hotel: response
            });
        }
    });
};


// Update Hotel
exports.updateHotel = async (req, res, next) => {
    const id = req.params.hotel;
    // const hotel = req.body;
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