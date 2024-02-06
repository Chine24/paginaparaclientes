function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var tipoSitio = document.getElementById('tipoSitio').value;
    var funcionalidades = document.getElementById('funcionalidades').value;

    console.log('Nombre: ' + nombre);
    console.log('Tipo de Sitio: ' + tipoSitio);
    console.log('Funcionalidades Deseadas: ' + funcionalidades);

    alert('¡Formulario enviado con éxito!');

    // Puedes agregar más acciones después de enviar el formulario si es necesario.
}

