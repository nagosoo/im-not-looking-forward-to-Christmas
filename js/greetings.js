const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");


const HIDDEN_CLASS_NAME = "hidden";
const USER_NAME_KEY = "userName";
const savedUserName = localStorage.getItem(USER_NAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    localStorage.setItem(USER_NAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.innerHTML = `${userName}, <span class="merry-christmas">메리크리스마스</span>`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUserName);
}
