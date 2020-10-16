 export class TodoList {
     constructor() {
         //this.todos = [];
         this.cargarLocalStorage();

     }
     nuevoTodo(todo) {
         this.todos.push(todo);
         this.guardarLocalStorage();
     }
     eliminarTodo(id) {
         this.todos = this.todos.filter(todo => {
             return todo.id != id;
             this.guardarLocalStorage();
         });

     }
     marcarCompletado(id) {
         for (const todo of this.todos) {
             if (todo.id == id) {
                 todo.completado = !todo.completado;
                 this.guardarLocalStorage();
                 break;
             }
         }

     }

     eliminarCompletados(id) {
         this.todos = this.todos.filter(todo => {
             return !todo.completado;
             this.guardarLocalStorage();

         });


     }
     guardarLocalStorage() {
         localStorage.setItem('todo', JSON.stringify(this.todos));


     }
     cargarLocalStorage() {
         if (localStorage.getItem('todo')) {
             this.todos = JSON.parse(localStorage.getItem('todo'));

         } else {
             this.todos = [];
         }

     }


 }