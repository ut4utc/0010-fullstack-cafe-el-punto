const express = require('express')
const controller = require('../controllers/analitycs')
const router = express.Router()


// localhost:5000/api/analitycs/overwiev
router.get('/overview', controller.overview)

// localhost:5000/api/analitycs/analitycs
router.get('/analitycs', controller.analitycs)


module.exports = router