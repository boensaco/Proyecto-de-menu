const Model = require('../models/recetaModel')

class RecetaController {
    // GET - obtener todas las recetas
    static async obtenerRecetas(req, res) {
        try {
            const recetas = await Model.obtenerRecetas()
            res.json({
                success: true,
                data: recetas
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Error al obtener las recetas"
            })
        }
    }

    // GET - obtener receta por ID
    static async obtenerPorId(req, res) {
        try {
            const { id } = req.params
            const receta = await Model.obtenerPorId(id)

            if (receta.length === 0) {
                return res.status(404).json({
                    success: false,
                    mensaje: 'La receta no existe'
                })
            }

            // Enviar solo el objeto, no el array
            res.json({
                success: true,
                data: receta[0]
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                error: "Error al obtener la receta"
            })
        }
    }
}

module.exports = RecetaController
