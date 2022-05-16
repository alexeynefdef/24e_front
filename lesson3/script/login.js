const submit = document.getElementById('sub');

submit.addEventListener('click', () => {

    const admin_username = "admin";
    const admin_password = "admin";

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username === admin_username && password === admin_password) {
        window.open("index.html","_self");
    } else {
        alert("Incorrect username or password");
    }
});