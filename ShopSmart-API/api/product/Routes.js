/****************************
* File Name: Routes.js 		*
* Author: Ameen Hamza 		*
* Output: Routes for product*
****************************/

const express = require('express')
const router = express.Router()

const { getProduct, getProductByName, createProduct, deleteProduct, updateProduct } = require('./Controller')

router.get('/getProduct', getProduct)
router.get('/getProductByName', getProductByName)
router.post('/createProduct', createProduct)
router.delete('/deleteProduct', deleteProduct)
router.put('/updateProduct', updateProduct)



module.exports = router