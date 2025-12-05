const express = require('express')
const app = express()
const recetasRoutes = require('./routes/recetasRoutes')

// necesario para leer JSON
app.use(express.json())

// usar el router
app.use('/recetas', recetasRoutes)

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})
