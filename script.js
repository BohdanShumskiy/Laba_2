//Присвоюємо змінним значення
const showPasswordIcon = document.querySelector('#showPassword');
const hidePasswordIcon = document.querySelector('#hidePassword');
const passwordInput = document.querySelector('#password');

//На "клік" змінюємо поле pass з pass на text
showPasswordIcon.addEventListener('click', function () {
    passwordInput.setAttribute('type', 'text');
    showPasswordIcon.style.display = 'none';
    hidePasswordIcon.style.display = 'inline';
});

//Навпаки + міняємо іконку
hidePasswordIcon.addEventListener('click', function () {
    passwordInput.setAttribute('type', 'password');
    hidePasswordIcon.style.display = 'none';
    showPasswordIcon.style.display = 'inline';
});



