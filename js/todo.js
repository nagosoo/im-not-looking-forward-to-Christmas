const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(item => item.id!==parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.className="button-class";
    button.addEventListener("click", deleteTodo);
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    todos.push(newTodoObj);
    todoInput.value = "";
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}