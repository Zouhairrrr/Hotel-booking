const Hotel = require("../models/HotelModel");

// Create Hotel
exports.createHotel = async (req, res, next) => {

    try {
        const hotel = await Hotel.create({
            name: req.body.name,
            // location: req.body.location,
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
exports.updateHotel = (req, res, next) => {
    const id = req.params.hotel;
    const hotel = req.body;
    Hotel.updateHotel(id, hotel, (err, response) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: "Failed to update hotel"
            });
        } else {
            res.json({
                success: true,
                msg: "Hotel updated"
            });
        }
    });
};


// Delete Hotel
exports.deletHotel = (req, res, next) => {

    const hotel = req.params.hotel;
    Hotel.deleteHotel(hotel, (err, response) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: "Failed to delete hotel"
            });
        } else {
            res.json({
                success: true,
                msg: "Hotel deleted"
            });
        }
    });
};