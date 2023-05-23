function showAlert() {alert("¡Hola, es una alerta desde JavaScript!");}

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function(event) {
  validateForm();
});

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateForm() {
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    // Agregar una pequeña demora antes de mostrar el mensaje
    setTimeout(function() {
      alert('Correo electrónico enviado correctamente.');
    }, 1000);
  }
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})