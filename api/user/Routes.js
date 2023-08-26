/****************************
* File Name: Routes.js      *
* Author: Ammar S.A.A       *
* Output: Router for users  *
****************************/

const express = require('express')
const router = express.Router()

const { Signin, Signup, deleteUser, updateUser, userByID, getUsers } = require('./Controller')


const authenticateToken = require('../../middlewear/authenticateToken')

router.post('/signin', Signin)
router.post('/signup', Signup)
router.get('/getUsers', authenticateToken, getUsers)
router.get('/getUserByID', authenticateToken, userByID)
router.delete('/deleteUser', authenticateToken, deleteUser)
router.put('/updateUser', authenticateToken, updateUser)


module.exports = router