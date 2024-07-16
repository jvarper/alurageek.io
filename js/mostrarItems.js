import { conexionApi } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]"); 

function crearCard(id,titulo, tecnica, imagen){
    //creamos el marco fluor que tendrá el item, titulo y tecnica...
    const card = document.createElement("div");
    card.className="marco-fluor";

    //Creamos la estructura dentro del div <<marcoFluor>>
    card.innerHTML=`<img src="${imagen}" alt="Imagen item" class="imagen-item">
        <p class="titulo-item">"${titulo}"</p>
        <p class="tecnica">"${tecnica}"</p>
        <button class="eliminar" data-id="${id}">
            <div class="icono-papelera">
                <img src="img/🦆 icon _trash 2_.png" alt="Eliminar">
            </div>
        </button>`;
    
    //Código para eliminar un item desde el botón "papelera"
    const botonEliminar =card.querySelector(".eliminar");
    botonEliminar.addEventListener("click", () => {
        conexionApi.borrarItem(id)
        .then(() => {
            card.remove();
        })
        .catch(err => console.log(err));
    });

    lista.appendChild(card);
    return card;
}

const item = async () => {
    try{
        const listaApi= await conexionApi.listarItems()

        listaApi.forEach(card => {
            lista.appendChild(
                crearCard(
                    card.id,
                    card.titulo,
                    card.categoria,
                    card.imagen)
                );
    });

    } catch(error) {
        console.log(error)
    };

};

item()
