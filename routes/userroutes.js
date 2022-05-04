const express = require('express')
const router = express.Router()

const {
    createuser,getusers,updateusers

} = require('../controllers/usercontroller')



router.get('/client',getusers)
router.get('/addclient' ,createuser )
router.post('/addclient' ,createuser )
router.put('/updateusers/:id' , updateusers)


module.exports = router
