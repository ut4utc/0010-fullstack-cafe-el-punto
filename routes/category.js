const express = require('express')
const controller = require('../controllers/category')
const router = express.Router()


// localhost:5000/api/category (GET)
router.get('/', controller.getAll)

// localhost:5000/api/category/:id (GET)
router.get('/:id', controller.getById)

// localhost:5000/api/category/:id (DELETE)
router.delete('/:id', controller.remove)

// localhost:5000/api/category (POST)
router.post('/', controller.create)

// localhost:5000/api/category/:id (PATCH)
router.post('/:id', controller.update)


module.exports = router