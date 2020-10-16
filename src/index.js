import { saludar } from './js/componentes.js';
import './styles.css';

import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todolist.class.js';
import { crearTodoHTML } from './js/componentes.js'

export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHTML(todo));