//Informacion Fecha
const numeroFecha = document.getElementById('numerofecha');
const textoFecha = document.getElementById('textoFecha');
const mesFecha = document.getElementById('fechaMes');
const añoFecha = document.getElementById('fechaAño');

//Contenedor de Tareas
const taskContainer = document.getElementById('tasksContainer')

const setDate = () => {
    const date = new Date();
    numeroFecha.textContent = date.toLocaleString('es',{day: 'numeric'});//dia en numeros
    textoFecha.textContent = date.toLocaleString('es',{weekday: 'long'});//El texto se ve largo ejemplos:miercoles
    mesFecha.textContent = date.toLocaleString('es',{month: 'short'});//solo se ve la primera parte ejm:sep
    añoFecha.textContent = date.toLocaleString('es',{year: 'numeric'});//año en numeros
};
const addNewTask = event => {
    event.preventDefault();//Para que el form no nos quiera llevar a otra pagina
    const { value } = event.target.taskText; //buscar o llamar el name del input
    if(!value)return;//si el usuario no ingreso nada que retorne
    const task = document.createElement('div');
    task.classList.add('task', 'redondeada');
    task.addEventListener('click',changeTaskState)
    task.textContent = value;//Se agrega lo que el user ingresa
    taskContainer.prepend(task);//Cada elemento se va agregando arriba
    event.target.reset();//cada vez que se agregue una tarea el input se limpia
};
const changeTaskState = event => { //Cuando se hace click en una tarea
    event.target.classList.toggle('done');//A ese elemento accedemos a las clases si no tiene la clase done o hecha se le agrega para tareas hechas
};

const order = () => {
    const done = []; //Tareas hechas,arrays o listas
    const toDo = []; //Tareas por hacer,arrays o listas
    taskContainer.childNodes.forEach( el => { //accedemos alos hijos del taskContainer
    el.classList.contains('done')? done.push(el) : toDo.push(el)//si el elemento contiene la clase se agrega al array done pero si no se agrega al array toDo-- (push agrega elementos al final del array) --
    return [...toDo,...done]; //primero devuelve el toDo y despues Done
    })
}
const renderOrderedTask = () =>{
    order().forEach(el => taskContainer.appendChild(el))//tomamos el elemento y lo ponemos uno por uno en el taskContainer
}
setDate();