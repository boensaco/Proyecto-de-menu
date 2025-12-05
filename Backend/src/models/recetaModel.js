const DB = require('../config/database')

class RecetasModel {
    // Obtener todas las recetas
    static async obtenerRecetas() {
        const [rows] = await DB.query('SELECT * FROM recetas')
        return rows
    }

    // Obtener 1 receta por ID
    static async obtenerPorId(id) {
        const [row] = await DB.query('SELECT * FROM recetas WHERE id = ?', [id])
        return row
    }
}

module.exports = RecetasModel
