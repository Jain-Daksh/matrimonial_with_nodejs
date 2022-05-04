const express = require('express')
const app = express()
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const PORT = process.env.PORT || 3000;



app.get('/' , (req,res) => {
    res.send("hi")
})

app.listen(PORT , (req,res) => {
    console.log(`server working on ${PORT}`)
})