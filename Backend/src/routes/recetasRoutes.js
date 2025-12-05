const express = require('express')
const router = express.Router()

const RecetaController = require('../controllers/recetaController')

router.get('/', RecetaController.obtenerRecetas)

router.get('/:id', RecetaController.obtenerPorId)

module.exports = router
