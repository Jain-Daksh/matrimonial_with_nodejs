const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser')
var db = require('./models')
var sequelize = require('sequelize')
var pg = require('pg')
const postgre = require('postgre')
var Users = db.Users
const user_data = require('./routes/userroutes')

app.use(bodyParser.json())



require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const PORT = process.env.PORT || 3000;

app.use('/' , user_data)


app.get('/' , (req,res) => {
    res.send("hi")
})

app.listen(PORT , (req,res) => {
    console.log(`server working on ${PORT} of server ${process.env.NODE_ENV}`)
})