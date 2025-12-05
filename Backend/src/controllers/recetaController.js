const { response } = require('express')
const Model = require('../models/recetaModel')

class RecetaController{
//get - para optener todas mis recetas          
    static async obtenerRecetas(request, response){
        const recetas = await Model.obtenerRecetas()
        response.json({
            success: true,
            daticos: recetas
        })
    }
    static async obtenerPorId(request,response){
        try{
            const {id} = request.params
            const receta = await Model.obtenerPorId(id)
            if(!receta){
              return response.status(404).json({
                    success: false,
                    mensaje: 'la receta no existe perro!!!'
                })
            }else{
                response.json(receta)

            }
        }catch(error){
            throw error
        }



    }


}

module.exports = RecetaController