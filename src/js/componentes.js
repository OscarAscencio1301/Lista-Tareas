import { todoList } from '..';
import { Todo } from '../classes/todo.class';
import { TodoList } from '../classes/todolist.class';
import '../css/componentes.css';



//Refenrencias al HTML

const claseTodoList = document.querySelector('#todo-list');
const claseinput = document.querySelector('.new-todo');
const btonborrar = document.querySelector('.clear-completed');
const listafiltros = document.querySelector('.filters');

export const crearTodoHTML = (todo) => {
    const htmltodo = `<li class="${(todo.completado) ? 'completed': ''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked': ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`;


    const div = document.createElement('div');
    div.innerHTML = htmltodo;
    claseTodoList.append(div.firstElementChild);
    return div.firstChild;

}


//Evento: Crea una tarea 

claseinput.addEventListener('keyup', (copiar) => {
    if (copiar.keyCode === 13) {
        // console.log(claseinput.value);
        const nuevo = new Todo(claseinput.value);
        todoList.nuevoTodo(nuevo);
        crearTodoHTML(nuevo);
        claseinput.value = '';
    }
});

//Evento: Marcar como completado

claseTodoList.addEventListener('click', (marcar) => {

    const nombreElemento = marcar.target.localName; //input, label
    const todoElemento = marcar.target.parentElement.parentElement;
    const extraeId = marcar.target.parentElement.parentElement;
    const extraetodoId = extraeId.getAttribute('data.id');
    if (nombreElemento.includes('input')) { //hizo click en el check
        todoList.marcarCompletado(extraetodoId);
        todoElemento.classList.toggle('completed');
        //Eliminar todo

    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(extraetodoId);
        claseTodoList.removeChild(todoElemento);
    }

});

//Evento pra eliminar
btonborrar.addEventListener('click', () => {
    todoList.eliminarCompletados();
    for (let i = claseTodoList.children.length - 1; i >= 0; i--) {
        const elemento = claseTodoList.children[i];
        if (elemento.classList.contains('completed')) {
            claseTodoList.removeChild(elemento);
        }
    }

});

//Evento filtros

listafiltros.addEventListener('click', (event) => {
    console.log(event.target.text);
    const filtro = event.target.text;
    if (!filtro) {
        return;
    }
    for (const elemento of claseTodoList.children) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {

            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;

        }


    }
});