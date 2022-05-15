const db = require('../models')
const Users = db.users
const sequelize = require('sequelize')
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt')
const validator = require('fastest-validator');
const { default: Validator } = require('fastest-validator');
const res = require('express/lib/response');
const joi = require('joi');
const Joi = require('joi');
const jwt = require('jsonwebtoken') 
const { schema } = require('../validation/vaildation')
//const { uservalidation } = require('../validation/uservalidation')

/*
const createuser = async (req,res) => {
  const newuser = {
    first_name:req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    phone : req.body.phone,
    moblie : req.body.moblie,
    gender : req.body.gender
  }
  try {
    const saveperson = await Users.create(newuser)
    console.log(saveperson)
    console.log(newuser)
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createuser
}
*/




exports.create = async (req, res , next) => {
  const hashpassword = await bcrypt.hash(req.body.password , 10)
  
  const newuser = {
    first_name:req.body.first_name,
    
    last_name : req.body.last_name,
    email : req.body.email,
    phone : req.body.phone,
    moblie : req.body.moblie,
    gender : req.body.gender,
    date_of_birth : req.body.date_of_birth,
    password : hashpassword


  }
/*
  const pattern = "^[A-Za-z][A-Za-z0-9_]{7,29}$"

const schema = {
    first_name : {type:"string" , max: "50" , min: "2"}
  }
  const v = new validator();
  const validationresponse = v.validate(newuser , schema);
  if(validationresponse !==true){
    res.status(400).json({
      msg : "validation failed" , 
      error : validationresponse
    })
  }
  */
 /*
 const schema = joi.object().keys({
  first_name : joi.string().required().min(2).max(30).regex(RegExp(pattern))

 })
 //const v = new validator();
 //const validationresponse = v.validate(newuser , schema);
 const validationresponse = schema.validate({first_name})
 if(validationresponse !==true){
  res.status(400).json({
    msg : "validation failed" , 
    error : validationresponse
  })
}*/
//schema.validator(req.body)
//schema.validate(req.body)
/*
const result = await schema.validate(req.body)
console.log("result is" + result);
  if(result !== true){
    res.status(400).json({
      msg : "validation failed" , 
      error : result
    })
  }else{
    res.status(202).json({
      msg : "data added"
    })
  }
  */
  try {
    //const result = await schema.validateAsync(req.body)
    //console.log(result)
    const saveperson =await Users.create(newuser)
    console.log(saveperson)
    res.send(saveperson)
    //res.status(400).json(saveperson)
  } catch (error) {
    console.log(error)

  }


  
};


// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  Users.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};
// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Users.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Users.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};


exports.login = async (req , res) => {
  try {
    const {email , password} = req.body

    const result = await Users.findOne({
      where : {email : req.body.email}
    })
    if(result != null){
      var passwordisvalid = bcrypt.compare(req.body.password, result.password) 
      if(result.email == email && passwordisvalid){
        res.send("login")
      }else{
        res.send("invalid username or password")
      }

    }else{
      return res.status(404).send({ message: "User Not found" });

    }

  } catch (error) {
    console.log(error)
  }
  /*
  const {email , password} = req.body
  Users.findOne({
    where : {
      email : req.body.email
    }
  }).then(user => {
    if(!user){
      return res.status(404).send({ message: "User Not found." });
    }
    var passwordisvalid = bcrypt.compare(req.body.password, user.password) 
    if(!passwordisvalid){
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }
    var jsontoken =jwt.sign({passwordisvalid :user } , "asdf" , {
      expiresIn: '10h'
    });
    return res.json({
      success : 1,
      message : "successful ",
      token : jsontoken
    })
  })
  */
}

