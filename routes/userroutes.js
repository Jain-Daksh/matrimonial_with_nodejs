const express = require('express')
const router = express.Router()

const {
    createuser,getusers,getuser,updateuser,deleteuser

} = require('../controllers/usercontroller')



router.get('/client',getusers)
router.get('/addclient' ,createuser )
router.post('/addclient' ,createuser )
router.get('/getuser/:id' , getuser)
router.put('/updateuser/:id' , updateuser)
router.delete('/deleteuser/:id' , deleteuser)

module.exports = router
