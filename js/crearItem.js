import { conexionApi } from "./conexionAPI.js";


const formulario = document.querySelector("[data-formulario]");

function esURLValida(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

async function crearItem(evento){
    evento.preventDefault();

    const titulo=document.querySelector("[data-titulo]").value.trim();
    const tecnica=document.querySelector("[data-tecnica]").value.trim();
    const imagen=document.querySelector("[data-imagen]").value.trim();

    if (!titulo || !tecnica || !imagen) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    if (!esURLValida(imagen)) {
        alert("Por favor, ingresa una URL válida.");
        return;
    }

    try {
        await conexionApi.enviarItem(titulo,tecnica,imagen);
        //hasta aquí se envía los datos del nuevo item
        
        // Limpiar el formulario después del envío exitoso
        formulario.reset();
        
        //Recargar la página
        window.location.reload();
    } catch (error){
        console.error("Error al enviar los datos: ", error);
    }    
    
    
}

formulario.addEventListener("submit", crearItem);
