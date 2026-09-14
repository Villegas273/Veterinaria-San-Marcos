
const regiones = [
    {
        nombre: "Región Metropolitana",
        comunas: ["Santiago", "Maipú", "Rancagua"]
    },
    {
        nombre: "Valparaíso",
        comunas: ["Valparaíso", "Viña del Mar", "Quilpué"]
    },
    {
        nombre: "Biobío",
        comunas: ["Concepción", "Talcahuano", "Los Ángeles"]
    }
];

const region = document.getElementById("region");
const comuna = document.getElementById("comuna");

regiones.forEach((regionActual) => {
    region.innerHTML += `
        <option value="${regionActual.nombre}">
            ${regionActual.nombre}
        </option>
    `;
});

region.addEventListener("change", () => {

    comuna.innerHTML = '<option value="">Seleccione una comuna</option>';

    const regionSeleccionada = regiones.find(
        (regionActual) => regionActual.nombre === region.value
    );

    regionSeleccionada.comunas.forEach((comunaActual) => {
        comuna.innerHTML += `
            <option value="${comunaActual}">
                ${comunaActual}
            </option>
        `;
    });
});

const formulario = document.getElementById("form-registro");
const inputRun = document.getElementById("run");
const inputNombre = document.getElementById("nombre");
const inputApellidos = document.getElementById("apellidos");
const inputCorreo = document.getElementById("correo");
const inputFechaNacimiento = document.getElementById("fecha-nacimiento");
const inputDireccion = document.getElementById("direccion");

function validarRun(run) {
    const runLimpio = run.toUpperCase();

    if (runLimpio.length < 7 || runLimpio.length > 9) {
        return false;
    }

    if (!/^[0-9]+[0-9K]$/.test(runLimpio)) {
        return false;
    }

    const cuerpo = runLimpio.slice(0, -1);
    const digitoIngresado = runLimpio.slice(-1);

    const digitoCorrecto = calcularDigitoVerificador(cuerpo);

    return digitoIngresado === digitoCorrecto;
}

function calcularDigitoVerificador(run) {
    let suma = 0;
    let multiplicador = 2;

    for (let i = run.length - 1; i >= 0; i--) {
        suma += Number(run[i]) * multiplicador;

        multiplicador++;

        if (multiplicador > 7) {
            multiplicador = 2;
        }
    }

    const resto = suma % 11;
    const resultado = 11 - resto;

    if (resultado === 11) {
        return "0";
    }

    if (resultado === 10) {
        return "K";
    }

    return resultado.toString();
}


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const run = inputRun.value.trim();

    if (!validarRun(run)) {
        alert("El RUN no es válido.");
        return;
    }

    alert("RUN válido.");

    const nombre = inputNombre.value.trim();

    if (nombre === "") {
    alert("El nombre es obligatorio.");
    return;}

    if (nombre.length > 50) {
    alert("El nombre no puede superar los 50 caracteres.");
    return;}

    const apellidos = inputApellidos.value.trim();

    if (apellidos === "") {
    alert("Los apellidos son obligatorios.");
    return;}

    if (apellidos.length > 100) {
    alert("Los apellidos no pueden superar los 100 caracteres.");
    return;}


    const correo = inputCorreo.value.trim();

    if (correo === "") {
    alert("El correo electrónico es obligatorio.");
    return;}

    if (correo.length > 100) {
    alert("El correo electrónico no puede superar los 100 caracteres.");
    return;}

    if (
    !correo.endsWith("@duoc.cl") &&
    !correo.endsWith("@profesor.duoc.cl") &&
    !correo.endsWith("@gmail.com")) {
    alert("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    return;}

    const fechaNacimiento = inputFechaNacimiento.value;

    if (fechaNacimiento !== "") {
    const fechaIngresada = new Date(fechaNacimiento);
    const fechaActual = new Date();

    if (fechaIngresada > fechaActual) {
        alert("La fecha de nacimiento no puede ser futura.");
        return;
    }}

    const direccion = inputDireccion.value.trim();

    if (direccion === "") {
    alert("La dirección es obligatoria.");
    return;}

    if (direccion.length > 300) {
    alert("La dirección no puede superar los 300 caracteres.");
    return;}


    alert("Usuario registrado correctamente.");
    formulario.reset();
    comuna.innerHTML = '<option value="">Seleccione una comuna</option>';
});