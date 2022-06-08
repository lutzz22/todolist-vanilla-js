// colocá las declaraciones acá

const listaDeTareas = []
let inputTarea = document.querySelector('#task')
let inputPrioridad = document.querySelector('#prioridad')
let ul = document.querySelector('#lista-de-tareas')


//declaramos el class Tarea
class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre,
        this.prioridad = prioridad
    }
    agregarTarea(tarea) {
        listaDeTareas.push(tarea)
    }
}

const mostrarLista = () => {
    ul.textContent = ''
    listaDeTareas.forEach((todo, index) => (
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"
        id="${index}">${todo.nombre} - Prioridad: ${todo.prioridad} <i class="far fa-times-circle" onclick="eliminar(event)"></i></li>`
    ))
}

const todoList=()=>{
    if(inputTarea.value===''){
        alert('Ingrese una tarea')
    }else if (inputPrioridad.value==='Prioridad'){
        alert('Ingrese una prioridad')
    }
    else{
        const nuevaTarea = new Tarea (inputTarea.value,inputPrioridad.value)

        nuevaTarea.agregarTarea(nuevaTarea)
        mostrarLista()
         
        inputTarea.value=''
    }
    
}

let btn = document.querySelector('#agregar');
btn.addEventListener('click',todoList)


const eliminar =(event)=>{
    let borrar=parseInt(event.target.parentElement.id)
    listaDeTareas.splice(borrar,1)

    mostrarLista()
 }
    
