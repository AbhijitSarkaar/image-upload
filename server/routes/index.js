const express = require('express')
const router = express.Router()
const {
    getImages
} = require('../controllers/index')

router.get('/images', getImages)

module.exports =  router