function validarEmail() {
    const emailInput = document.getElementById('email');


    // Comprueba si el valor contiene un signo @
    if (emailInput.value.includes('@')) {
        errorMessage.style.display = 'none'; // Oculta el mensaje de error
    } else {
        errorMessage.style.display = 'block'; // Muestra el mensaje de error
    }
}



