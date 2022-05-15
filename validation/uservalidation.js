const { schema } = require('./vaildation')

module.exports = {
  uservalidation : async (req,res,next) =>{
    const value = await schema.validate(req.body)
    if(value.error) {
      res.json({
        success : 0,
        message : value.error.details[0].message
      })
    }else{
      next()
    }
  } 
}