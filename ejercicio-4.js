function validarFormulario() {
    const campos = document.querySelectorAll('input[required]');
    let esValido = true;

    campos.forEach(campo => {
        if (!campo.checkValidity()) {
            campo.setCustomValidity(campo.title);
            esValido = false;
        } else {
            campo.setCustomValidity('');
        }
    });

    return esValido; // Previene el envío si algún campo no es válido
}

