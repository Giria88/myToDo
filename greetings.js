
const form = document.querySelector('.form-js'),
      input = form.querySelector('input'),
      greetings = document.querySelector('.greetings-js');
const USER_LS = 'username',
      SHOWING_CN = 'showing';

function saveUserName(text){
    localStorage.setItem(USER_LS, text);
}

function submitHandler(event){
    event.preventDefault();
    const inputValue = input.value;
    showGreeting(inputValue);
    saveUserName(inputValue);
}

function showGreeting(text){
    greetings.innerText = `Шалом, ${text}`;
    greetings.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
}

function askForUsername(){
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', submitHandler);
}

function loadUserName(){
    const username = localStorage.getItem(USER_LS);
    if (username === null){
        askForUsername();
    }else {
        showGreeting(username);
    }
}

function init(){
    loadUserName();
}

init();