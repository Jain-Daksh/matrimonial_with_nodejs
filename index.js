const path = require('path')
//const cors = require('cors')
const express = require('express')
const expressRouter = express.Router()
const bodyParser = require('body-parser')
const app = express()
var http = require('http').Server(app)
//var { init } = require('./utilities/sockets')
const config = require('config')
// SETUP CONFIGS
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

/**
 * Function to register routes from all modules.
 * @return {Promise} Resolve for promise success with express route instance.
 */
const setupRoutes = function () {
  return new Promise((resolve, reject) => {
    const resisterRoutesPromise = require(path.resolve(
      './routes',
    )).registerRoutes(expressRouter)
    resisterRoutesPromise
      .then((routerInstance) => {
        return resolve(routerInstance)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

/**
 * Function to setup sequelize database acc. to `config.js`.
 * @return {Promise} Resolve for promise success after successfully connected to database.
 */
const setupSequelize = function () {
  return new Promise((resolve, reject) => {
    require(path.resolve('./models/index'))
    return resolve()
  })
}

const setupServer = function () {
  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  )
  //app.use(cors())
  const setupSequelizePromise = setupSequelize()
  setupSequelizePromise.then(() => {
    const setupRoutesPromise = setupRoutes()
    setupRoutesPromise.then((expressRouter) => {
        app.use('/', expressRouter)
        
        app.use(function (req, res, next) {
          res.status(404).send({
            message: 'API not found',
            statusCode: 404,
            path: req.path,
          })
        })

        http.listen(process.env.server_port)
        console.log(`SERVER STARTED ON PORT ${process.env.PORT}!`)
        init(http)
    })
  })
}

setupServer()
