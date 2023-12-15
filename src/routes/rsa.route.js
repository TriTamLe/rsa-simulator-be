const express = require('express')
const router = express.Router()
const rsaController = require('../app/controllers/rsa.controller')

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  })
})
router.post('/key-generate', rsaController.generateKey)
router.post('/encrypt', rsaController.encrypt)
router.post('/decrypt', rsaController.decrypt)

module.exports = router
