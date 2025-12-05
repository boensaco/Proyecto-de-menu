const express  = require('express')
const router = express.Router()
const RecetasController = require('../controllers/recetaController')
const RecetaController = require('../controllers/recetaController')

router.get('/',RecetasController.obtenerRecetas)
router.get('/:id',RecetaController.obtenerPorId)


module.exports = router

