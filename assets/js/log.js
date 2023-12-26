const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Login - Username: " + username + " Password: " + password);
}

function signup(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Signup - Username: " + username + " Password: " + password);
}