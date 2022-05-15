const db = require('../models/')
const user = db.User


const createuser = async (req,res) => {

    const newuser = {
        First_name: req.body.First_name,
        Last_name: req.body.Last_name,
        Email: req.body.Email,
        Date_of_birth: req.body.Date_of_birth,
        Mobile_Number: req.body.Mobile_Number,
        Gender: req.body.Gender,
        Password: req.body.Password,
        
    }

    console.log(newuser);
    try {
       const saveperson = await user.create(newuser)
       res.send(saveperson)
        console.log(saveperson)
    } catch (error) {
        console.log(error)
        
    }
}

const getusers =  async (req, res) => {
  
    const alluser = await user.findAll({})
     res.status(200).send(alluser)
    
  }

const getuser = async (req, res) =>{
    const id = req.params.id;
    let userid = await user.findOne({ where: { id: id }})
    if(!userid) res.status(404).send("not user with this id")
   
    return res.send(userid)
  
  }

const updateuser = async (req,res) => {
    let id = req.params.id;
    let userid = await user.update(req.body , { where: { id: id }})
   //let userid = await user.findOne({ where: { id: id }})
   if(!userid) res.status(404).send("not user with this id")
   
   /*
    const updateuser = {
        First_name: req.body.First_name,
        Last_name: req.body.Last_name,
        Email: req.body.Email,
        Date_of_birth: req.body.Date_of_birth,
        Mobile_Number: req.body.Mobile_Number,
        Gender: req.body.Gender,
        Password: req.body.Password,
        
    }
    user[userid] = updateuser
    */
    return res.send(userid)
   // return  res.status(200).json('Product updated')
}

const deleteuser =  async (req, res) =>{ 
    let id = req.params.id
    let userid = await user.destroy({ where: { id: id }})
    return res.send("userdeleted")
  
  }

module.exports = {
    createuser,getusers,getuser,updateuser,deleteuser
}