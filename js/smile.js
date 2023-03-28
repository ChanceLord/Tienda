const nombre = prompt("Hola ¿Cómo estás?, dígame su nombre por favor")

respuesta = `<h1>Hola ${nombre}</h1>`
document.getElementById('nombre').innerHTML = respuesta




//load
addEventListener("DOMContentLoaded",()=>{
actualizarReloj()
mostrarImagen()
})


const horaEl = document.getElementById("horaD")
function actualizarReloj(){
    let h= new Date().getHours()
    let m= new Date().getMinutes()
    horaEl.innerHTML=`${h}:${m}`

    setTimeout(()=> {
    actualizarReloj()
    }, 1000)
}



const heroEl = document.getElementById("hero")
const cambiarFondosEl = document.getElementById("CambiarFondos")
 const textoEl = document.getElementById("texto")


 

// //mostrar imagenes con api
function mostrarImagen(){
    let valor=""
    productos.forEach(element=>{
        valor+=
        `
        <div class="col-2">
            <div class="fondoImg">
                <img src="${element.imagen}"
                id="${element.id}">
            </div>
        </div>
        `
        })
    cambiarFondosEl.innerHTML=valor
}

//prueba mostrar texto e imagen con api

cambiarFondosEl.addEventListener("click",(evento)=>{
   
    let valor=""
if(evento.target && evento.target.tagName=="IMG"){
   const agente = productos.find(productos=> productos.id==evento.target.id)
        
          productos.forEach(productos=>{
             valor= `<div id="hero" class="" style="width:100%;background-image: url('${agente.imagen}');">

             </div>`
              heroEl.innerHTML=valor
          })
   valor=
   `
   <p id="{${agente.id}}">
   ${agente.nombre}</p>
   <p>${agente.descripcion}</p>
   <p>${agente.precio}</p>
   `
   textoEl.innerHTML=valor
}
})



//lista

//tomamos los elementos
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");

//variable que lleva la cantidad de tareas
var total = 0;

btn.onclick = function() {
    //controlamos si el campo esta vacio
    if (inputTarea.value == "") {
        return;
    }
    //tomamos el valor del campo
    var elemento = inputTarea.value;
    //creo un elemento li
    var li = document.createElement("li");
    //le agrego el texto al elemento
    li.textContent = elemento;
    //egrego el li al listado
    listado.appendChild(li);
    //incremento la cantidad de tareas
    total++;
    cantidad.innerHTML = total;


    //Agregamos el boton eliminar a cada elemento del listado
    var btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);


    //Agregamos la funcionalidad que elimina del listado el elemento
    btnEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    //limpiamos el campo
    inputTarea.value = "";

}