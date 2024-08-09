const express = require('express')
const router = express.Router()

const DonorController = require('./controllers/DonorController')

// Rota de Teste
router.get('/', (_req, res) => {
  res.send('Essa é uma rota de teste! A API está funcionando')
})

// Rotas para Doadores
router.get('/donor', DonorController.index)
router.get('/donor/:id', DonorController.show)
router.post('/donor', DonorController.create)
router.patch('/donor/:id', DonorController.updateInfoiapes)

module.exports = router