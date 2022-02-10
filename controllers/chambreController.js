const Chambre = require('../models/chambreModel')


const allChambre = async (req,res)=>{
    const chambres = await Chambre.find().catch(e=>console.log(e));
    return res.status(200).send(chambres);
    
}

const create = async (req, res) =>{


   const chambre = new Chambre({
    content : req.body.content,
    
   });
 

   try {
       const savedChambre = await chambre.save();
       res.status(200).send({chambre: savedChambre})
   } catch (e){
       res.status(400).send({
           status: "Failed",
           msg: e
       })
   }
}


module.exports ={
    create,
    allChambre,
    
}
