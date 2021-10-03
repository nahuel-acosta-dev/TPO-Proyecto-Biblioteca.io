/*-------------------------------Recolectores-----------------------------*/
const terror = [];

const ficcion = [];

const infantiles = [];

/*--------------------------------------------------------------------*/

/*------------------------------Generales------------------------------*/
let cargar = () =>{
 cargarLibroTerror();
 cargarLibroFiccion();
 cargarLibroInfantiles();
}

document.getElementById("guardar").addEventListener('click', () =>{
    agregarLibro();
})

const crearLibro = (nombre,libro)=>{
    let terrorHtml = `<div class="card text-white bg-danger mb-3 caracteristicas">
    <button class="btn mi-button" id="${nombre}${libro.id}" onclick="estado${nombre}(${libro.id})" value="off">Sin Leer<i class="bi bi-book-half inactiva"></i></button>
    <p><span class="etiquetas">Libro:</span>${libro.nombre}</p>
    <p><span class="etiquetas">Autor:</span>${libro.autor}</p>
    <p><span class="etiquetas">Descripcion:</span></p>
    <p class="card-body describes">${libro.descripcion}</p>
    <button type="button" class="btn btn-warning" onclick="eliminarLibroTerror(${libro.id})">Eliminar</button>
</div>
`
    return terrorHtml;
}

const cambiarEstado = (estado)=>{
    if(estado.value === "off"){
        estado.value = "on";
        estado.innerHTML = 'Leido<i class="bi bi-book activa"></i>';}
    else{
        estado.value = "off";
        estado.innerHTML = 'Sin Leer<i class="bi bi-book-half inactiva"></i>'
    }

}
/*----------------------------------------------------------------------*/

/*---------------Libro Terror------------------*/

const cargarLibroTerror = ()=>{
    let libroHtml = "";
    for(libro of terror){
        libroHtml += crearLibro("ColorTerror",libro);
    }

    document.getElementById("terror").innerHTML = libroHtml;
}

const eliminarLibroTerror = (id)=>{
    let indiceEliminar = terror.findIndex(libroTerror => libroTerror.id === id);
    terror.splice(indiceEliminar, 1);
    cargarLibroTerror();
    guardarTerror();
}

const estadoColorTerror = (id)=>{
    let estado = document.getElementById(`ColorTerror${id}`);
    cambiarEstado(estado);
}
const guardarTerror = ()=>{
    localStorage.setItem("terror", JSON.stringify(terror))
}

/*-----------------------------------------*/

/*---------------Libro Ficcion------------------*/

const cargarLibroFiccion = ()=>{
    let libroHtml = "";
    for(libro of ficcion){
        libroHtml += crearLibro("ColorFiccion",libro);
    }

    document.getElementById("ficcion").innerHTML = libroHtml;
}

const eliminarLibroFiccion = (id)=>{
    let indiceEliminar = ficcion.findIndex(libroFiccion => libroFiccion.id === id);
    ficcion.splice(indiceEliminar, 1);
    cargarLibroFiccion();
    guardarFiccion();
}

const estadoColorFiccion = (id)=>{
    let estado = document.getElementById(`ColorFiccion${id}`);
    cambiarEstado(estado);
}

const guardarFiccion = ()=>{
    localStorage.setItem("ficcion", JSON.stringify(ficcion))
   }

/*-----------------------------------------*/


/*---------------Libro Infantiles------------------*/

const cargarLibroInfantiles = ()=>{
    let libroHtml = "";
    for(libro of infantiles){
        libroHtml += crearLibro("ColorInfantiles",libro);
    }

    document.getElementById("infantiles").innerHTML = libroHtml;
}

const eliminarLibroInfantiles = (id)=>{
    let indiceEliminar = infantiles.findIndex(libroInfantiles=> libroInfantiles.id === id);
    infantiles.splice(indiceEliminar, 1);
    cargarLibroInfantiles();
    guardarInfantiles();
}

const estadoColorInfantiles = (id)=>{
    let estado = document.getElementById(`ColorInfantiles${id}`);
    cambiarEstado(estado);
}

const guardarInfantiles = ()=>{
    localStorage.setItem("infantiles", JSON.stringify(infantiles))
};
/*-----------------------------------------*/


let agregarLibro = ()=>{
    let forma = document.forms["forma"];
    let nombre = forma["nombre"];
    let autor = forma["autor"];
    let tipo = forma["genero"];
    let descripcion = forma["descripcion"]
    if(nombre.value !== "" && autor.value !== "" && descripcion.value !== ""){
        if(tipo.value === "terror"){
            terror.push(new Terror(nombre.value, autor.value, descripcion.value))
            cargarLibroTerror();
            guardarTerror();
        }
        else if(tipo.value === "ficcion"){
            ficcion.push(new Ficcion(nombre.value, autor.value, descripcion.value))
            cargarLibroFiccion();
            guardarFiccion();
        }
        else if(tipo.value === "infantiles"){
            infantiles.push(new Infantiles(nombre.value, autor.value, descripcion.value));
            cargarLibroInfantiles();
            guardarInfantiles();
        }
    }
}

/*------------------------LocalStorage----------------------------*/
document.addEventListener("DOMContentLoaded", ()=>{
    obtenerDatos("terror", terror);
    obtenerDatos("ficcion", ficcion);
    obtenerDatos("infantiles", infantiles);
})

const obtenerDatos = (tipo, array) =>{
    cook = JSON.parse(localStorage.getItem(tipo));
    if(cook != null)recargarDatos(cook, array);
}

const recargarDatos = (valores, array) => {
    for(let cook of valores){
        array.push(new Terror(cook._nombre, cook._autor, cook._descripcion));
    }
    cargar();
}
/*----------------------------------e----------------------------*/

















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































//# sourceMappingURL=script.js.map
