// URL del backend
const API_URL = "http://localhost:3000/recetas";

// Función para obtener las recetas del backend
async function cargarRecetas() {
    try {
        const respuesta = await fetch(API_URL);
        const data = await respuesta.json();

        if (data.success) {
            pintarRecetas(data.daticos);
        } else {
            console.error("Error al cargar recetas");
        }
    } catch (error) {
        console.error("Error en la petición:", error);
    }
}

// Función para pintar las recetas en el DOM
function pintarRecetas(recetas) {
    const contenedor = document.getElementById("contenedor-recetas");

    if (!contenedor) {
        console.error("❌ No existe un elemento con id 'contenedor-recetas' en tu HTML.");
        return;
    }

    contenedor.innerHTML = ""; // Limpia antes de pintar

    recetas.forEach(receta => {
        const card = document.createElement(
