const express = require('express')
const router = express.Router()

const RecetaController = require('../controllers/recetaController')

// Obtener todas las recetas
router.get('/', RecetaController.obtenerRecetas)

// Obtener una receta por ID
router.get('/:id', RecetaController.obtenerPorId)

module.exports = router
