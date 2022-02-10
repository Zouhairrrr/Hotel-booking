const Reserv = require('../models/reservationModel')
 
 

const allReserv = async (req, res) => {
    const reservs = await Reserv.find().catch(e => console.log(e));
    return res.status(200).send(reservs);


}

const create = async (req, res) => {
    const reserv = new Reserv({
        fromeDate: new Date(req.body.fromeDate),
        toDate: new Date(req.body.toDate),
        payment: req.body.payment,
        chambre: req.params.id,
        owner: req.owner.id
    });

    const checkInDate = parseInt(reserv.fromeDate.getTime() / 1000, 10);  
    const checkOutDate = parseInt(reserv.toDate.getTime() / 1000, 10);  
    if (checkInDate > checkOutDate) {
        res.status(400).send({
            status: "reserve error",
        })
    }

    const reservId = await Reserv.findOne({ chambre: req.params.id });
    if (reservId) {
        daate = parseInt(reservId.fromeDate.getTime() / 1000, 10)
    }
    if (reservId && checkInDate === daate) {
            res.status(400).send({
                status: "reserved ",
            })

        }
        try {
            const savedReserv = await reserv.save();
            res.status(200).send({reserv: savedReserv})
        } catch (e){
            res.status(400).send({
                status: "Failed",
                msg: e
            })
        }
}


module.exports = {
    create,
    allReserv,

}
