const Joi = require('joi')

const schema = Joi.object({
  first_name : Joi.string().required().max(50).min(2),
  last_name:Joi.string().required().max(50).min(2),
  email :Joi.string().min(3).required().email(),
  phone : Joi.string().length(7).pattern(/^[0-9]+$/),
  //moblie : Joi.string().length(10).pattern(/^[0-9]+$/),
  moblie : Joi.number().integer().min(1000000000).max(9999999999).message("Invalid mobile number").required(),
  gender : Joi.string().valid("Male","Female","Others").required(),
  date_of_birth :Joi.string().required(),
  password : Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)).min(8).required()
})

module.exports = {
  schema
}