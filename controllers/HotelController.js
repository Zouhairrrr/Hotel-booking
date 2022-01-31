// Create Hotel
exports.createHotel = (req, res, next) => {
    
        const hotel = new Hotel({
            _id: mongoose.Types.ObjectId(),
            // owner: req.body.owner,
            name: req.body.name,
            // location: req.body.location,
            description: req.body.description,
        });
        Hotel.addHotel(hotel, (err, response) => {
            if(err){
                console.log(err);
                res.json({success: false, msg: "Failed to add hotel"});
            }
            else{
                res.json({success: true, msg: "Hotel added"});
            }
        });
    }

// Get all hotels
// exports.showHotels = (req, res, next) => {


//     //

// }

// Get one hotel by ID
exports.getOneHotel = (req, res, next) => {

    const hotel = req.params.hotel;
    Hotel.getHotel(hotel, (err, response) => {
        if(err){
            console.log(err);
            res.json({success: false, msg: "No such hotel exists"});
        }
        else{
            res.json({success: true, hotel: response});
        }
    });
};


// Update Hotel
exports.updateHotel = (req, res, next) => {
    const id = req.params.hotel;
    const hotel = req.body;
    Hotel.updateHotel(id, hotel, (err, response) => {
        if(err){
            console.log(err);
            res.json({success: false, msg: "Failed to update hotel"});
        }
        else{
            res.json({success: true, msg: "Hotel updated"});
        }
    });
};


// Delete Hotel
exports.deleteHotel = (req, res, next) => {

    const hotel = req.params.hotel;
    Hotel.deleteHotel(hotel, (err, response) => {
        if(err){
            console.log(err);
            res.json({success: false, msg: "Failed to delete hotel"});
        }
        else{
            res.json({success: true, msg: "Hotel deleted"});
        }
    });
};