const express = require('express')
const controller = require('../controllers/position')
const router = express.Router()


// localhost:5000/api/position/:category (GET)
router.get('/', controller.getByCategoryId)

// localhost:5000/api/position (POST)
router.post('/', controller.create)

// localhost:5000/api/position/:id (PATCH)
router.patch('/:id', controller.update)

// localhost:5000/api/position/:id (DELETE)
router.delete('/:id', controller.remove)

module.exports = router