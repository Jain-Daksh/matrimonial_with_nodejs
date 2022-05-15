const express = require('express')
const app = express()

const bodyParser = require('body-parser')
//const userroutes = require('./routes/userrouter')
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json())
const port = process.env.PORT || 3000

//app.use('/' , userroutes)

require('./routes/user.routes')(app);

app.listen(port,()=>{
  console.log(`server working on ${port}`)
})

