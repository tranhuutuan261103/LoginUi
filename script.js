const logregBox =  document.querySelector('.logref-box');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
    alert("Please fill in the form to register");
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});