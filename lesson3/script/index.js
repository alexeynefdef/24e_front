const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

//Contact form
const submit = document.getElementById('form_button');

submit.addEventListener('click', () => {

    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    let data = {email,name,message};

    alert("Your message was successfully sent:\n" + data.name + "\n" + data.email + "\n" + data.message);
        
});