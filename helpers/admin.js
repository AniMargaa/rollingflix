 let crearPelicula = document.getElementById("crearPelicula"),
 portadaPelicula = document.getElementById("portada"),
 tituloPelicula = document.getElementById("titulo"),
 categoriaPelicula = document.getElementById("categoria"),
 descripcionPelicula = document.getElementById("descripcion"),
 enviarBtn = document.querySelector(".enviar"),
 peliculaDatos = document.getElementById("entrada-peliculas"),
 modal = document.getElementById("crearPeliculas"),
 tituloModal = document.querySelector("#crearPeliculas .modal-title")
 
 let getData = localStorage.getItem("perfilPelicula") ? JSON.parse(localStorage.getItem("perfilPelicula")) : []

let isEdit = false, editId
showInfo()

function showInfo(){
    document.querySelectorAll(".detallePeliculas").forEach(info => info.remove())
    getData.forEach((elemento, index) => {
        
        let crearElemento = `
        <tr class="detallePeliculas">
        <td>${index+1}</td>
        <td><img src="${elemento.portada}" alt="" width="100" height="100"></td>
        <td>${elemento.titulo}</td>
        <td>${elemento.categoria}</td>
        <td>${elemento.descripcion}</td>
        <td><input type="checkbox"</td>
        <td><button class="btn btn-success mx-2" onclick='editPelicula(${index}, "${elemento.portada}", "${elemento.titulo}", "${elemento.categoria}", "${elemento.descripcion}")' data-bs-toggle="modal" data-bs-target="#CrearPeliculas"><i class="bi bi-pencil-square"></i></button><button class="btn btn-danger" onclick="eliminarPelicula(${index})"><i class="bi bi-trash"></i></button></td>
        </tr>
        `
        peliculaDatos.innerHTML += crearElemento
    })
    
}
showInfo()


function editPelicula(index, portada, titulo, categoria, descripcion){
    console.log("entro")
    console.log(index);
   isEdit = true
   editId = index
   console.log(editId);
   portadaPelicula.value = portada
   tituloPelicula.value = titulo
   categoriaPelicula.value = categoria
   descripcionPelicula.value  = descripcion


   enviarBtn.innerText = "Editar"
   tituloModal.innerText = "Editar la pelicula"
   
}


function eliminarPelicula(index){
    if (confirm("Desea eliminar la pelicula?")){
        getData.splice(index, 1)
        localStorage.setItem("perfilPelicula", JSON.stringify(getData))
        showInfo()
    }
}

crearPelicula.addEventListener("submit", (event) =>{

event.preventDefault()
const datosPeliculas = {
    portada: portada.value,
    titulo: titulo.value,
    categoria: categoria.value,
    descripcion: descripcion.value,
}
    if(!isEdit){
        getData.push(datosPeliculas)
    }else{
        isEdit = false
        getData[editId] = datosPeliculas
    }

    localStorage.setItem("perfilPelicula", JSON.stringify(getData))



    

    crearPelicula.reset()

    
    
    showInfo()
})