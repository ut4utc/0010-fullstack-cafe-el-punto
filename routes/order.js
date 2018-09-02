const express = require('express')
const controller = require('../controllers/order')
const router = express.Router()


// localhost:5000/api/order (GET)
router.get('/', controller.getAll)

// localhost:5000/api/auth/order (POST)
router.post('/', controller.create)


module.exports = router