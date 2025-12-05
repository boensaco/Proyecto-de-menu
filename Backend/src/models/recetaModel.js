const DB = require('../config/database')

class RecetasModel {
    //obtener recetas
    static async obtenerRecetas(){
        const [rows] = await DB.query('SELECT * FROM recetas')
        return rows
    }
    //obtener 1 sola receta por id
    static async obtenerPorId(id){
        const [row] = await DB.query('SELECT * FROM recetas WHERE id = ?',id)
        return row
    }

}

module.exports = RecetasModel