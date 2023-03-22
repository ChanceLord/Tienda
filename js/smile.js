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




//parametros para cambiar fondo con un click sin usar api
//  const aFondos = ['borradores.jpg','lapices.jpg',
//  'cuadernos.jpg','sacapunta.jpg']

//  cambiarFondosEl.addEventListener('click', (e) =>{
//      if(e.target && e.target.tagName == "IMG"){
//          heroEl.style.backgroundImage =`url(assets/productos/${aFondos[e.target.id]})`
//      }

//  })


 
 //mostrar texto con api

//  function mostrarMenu(){
//     let valor= ""
//     productos.forEach(element=>{
//          valor+=
//          `
         
//          <p><b>${element.nombre}:</b> ${element.descripcion}
//          </p><br><p>${element.precio}</p>
//          `
//      })
//      textoEl.innerHTML=valor
// }
