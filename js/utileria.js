
function validarCorreo(correo) {
    const regular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regular.test(correo);
}

function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    let textoNum = numero.toString();
    return textoNum.length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}


function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}


function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_\-+=])[A-Za-z\d@$!\%*?&.#_\-+=]{8,}$/;
    return regex.test(password);
}




function generarFolioTicket(nombreCliente) {
    let prefijo = "CLI";
    if (nombreCliente && nombreCliente.length >= 3) {
        prefijo = nombreCliente.substring(0, 3).toUpperCase();
    }
    const aleatorio = Math.floor(Math.random() * 9000) + 1000; 
    return `TKT-${prefijo}-${aleatorio}`;
}

function truncarTexto(texto, limite) {
    if (!texto) return "";
    if (texto.length <= limite) return texto;
    return texto.substring(0, limite).trim() + '...';
}




function ProcesarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const correo = document.getElementById('correo').value; 
    const contraseña = document.getElementById('contraseña').value;
    
    // Labels de error
    const msjNombre = document.getElementById('msjNombre');
    const msjApellidos = document.getElementById('msjApellidos');
    const msjFecha = document.getElementById('msjFecha');
    const msjCorreo = document.getElementById('msjCorreo');
    const msjPassword = document.getElementById('msjPassword');

    // Limpiar errores 
    if (msjNombre) msjNombre.textContent = '';
    if (msjApellidos) msjApellidos.textContent = '';
    if (msjFecha) msjFecha.textContent = '';
    if (msjCorreo) msjCorreo.textContent = '';
    if (msjPassword) msjPassword.textContent = '';

    let hayErrores = false;

    // Validaciones con etiquetas label
    if (!soloLetras(nombre)) {
        if (msjNombre) msjNombre.textContent = 'Ingrese solo letras válidas.';
        hayErrores = true;
    }

    if (!soloLetras(apellidos)) {
        if (msjApellidos) msjApellidos.textContent = 'Ingrese solo letras válidas.';
        hayErrores = true;
    }

    if (!fechaNacimiento) {
        if (msjFecha) msjFecha.textContent = 'Seleccione su fecha de nacimiento.';
        hayErrores = true;
    }

    if (!validarCorreo(correo)) {
        if (msjCorreo) msjCorreo.textContent = 'Formato inválido (Ej: correo@dominio.com)';
        hayErrores = true;
    }

    if (!validarPassword(contraseña)) {
        if (msjPassword) msjPassword.textContent = 'Mín. 8 caracteres (Mayúscula, minúscula, número y símbolo).';
        hayErrores = true;
    }

    if (hayErrores) return;

    // Ejecución de la lógica si todo es correcto
    const edad = calcularEdad(fechaNacimiento);
    const mayorEdad = esMayorDeEdad(fechaNacimiento) ? "Es mayor de edad" : "Es menor de edad";
    const folio = generarFolioTicket(nombre);

    const corte= truncarTexto(nombre, 3);
    

    const listaInputs = document.querySelectorAll('#Registro input');
    const inputFolio = listaInputs[4]; // Posición del input de folio
    if (inputFolio) {
        inputFolio.value = folio;
    }

    // resultados
    const mensaje = `
     <strong>Usuario:</strong> ${corte} ${apellidos} <br><br>
        <strong>Folio generado:</strong> ${folio} <br><br>
        <strong>Correo registrado:</strong> ${correo} <br><br>
        <strong>Edad calculada:</strong> ${edad} años (${mayorEdad}) <br>
       
    `;
    
    document.getElementById('mensajeModal').innerHTML = mensaje;
    document.getElementById('miModal').style.display = "flex";
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}

// inicio de sesion
function iniciarSesion() {
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    
    const msjLoginCorreo = document.getElementById('msjLoginCorreo');
    const msjLoginPassword = document.getElementById('msjLoginPassword');

    if (msjLoginCorreo) msjLoginCorreo.textContent = '';
    if (msjLoginPassword) msjLoginPassword.textContent = '';

    let error = false;

    if (!validarCorreo(correo)) {
        if (msjLoginCorreo) msjLoginCorreo.textContent = 'Correo no válido.';
        error = true;
    }

    if (!validarPassword(password)) {
        if (msjLoginPassword) msjLoginPassword.textContent = 'Contraseña incorrecta o no cumple los requisitos.';
        error = true;
    }

    if (error) return;

    alert("¡Credenciales válidas! Acceso concedido.");
}