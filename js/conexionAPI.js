async function listarItems(){    
    const conexion= await fetch("https://my-json-server.typicode.com/jvarper/alurageek.io/accesorios");
    const conexionConvertida=conexion.json();
    return conexionConvertida;
};

//Aquí debemos indicar el método y qué tipo de archivo se estará enviando
async function enviarItem(titulo, categoria, imagen){
    return await fetch("https://my-json-server.typicode.com/jvarper/alurageek.io/accesorios",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            categoria:categoria,
            imagen:imagen
        })
    })
};

const borrarItem = async (id) => {
    try{
        const res= await fetch(`https://my-json-server.typicode.com/jvarper/alurageek.io/accesorios/${id}`,{
            method: "DELETE"
        });
        return await res.json();
    } catch(err) {
        return console.log(err);
    }
}

export const conexionApi={
    listarItems,
    enviarItem,
    borrarItem
}
