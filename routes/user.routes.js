module.exports = app => {
  const users = require('../controllers/user.controllers');
  const { uservalidation } = require('../validation/uservalidation')
  const { checkToken } = require('../auth/token_validation')
  var router = require("express").Router();
  // Create a new User
  router.post("/",uservalidation, checkToken , users.create);
  // Retrieve all Users
  router.get("/", users.findAll);
  // Retrieve a single User with id
  router.get("/:id", users.findOne);
  // Delete a User with id
  router.delete("/:id", users.delete);
  /*
  // Update a User with id
  router.put("/:id", users.update);
  // Create a new User
  router.delete("/", users.deleteAll);
  */

  router.post('/login' , users.login)
  app.use('/create', router);
};