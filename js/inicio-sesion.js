
const inputEmail = document.getElementById("input-email")

const inputPassword = document.getElementById("input-password")

const butonInicioSesion = document.getElementById("btn-inicio-sesion")

function validarCorreo(correo) {
    if (correo === "") {
        return false;
    }

    if (correo.length > 100) {
        return false;
    }

    if (
        !correo.endsWith("@duoc.cl") &&
        !correo.endsWith("@profesor.duoc.cl") &&
        !correo.endsWith("@gmail.com")
    ) {
        return false;
    }

    return true;
}

function validarPassword(password) {
    if (password === "") {
        return false;
    }

    if (password.length < 4 || password.length > 10) {
        return false;
    }

    return true;
}

butonInicioSesion.addEventListener("click", function(){

        const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();

    if (!validarCorreo(email)) {
        alert("El correo electrónico no es válido.");
        return;
    }

    if (!validarPassword(password)) {
        alert("La contraseña debe tener entre 4 y 10 caracteres.");
        return;
    }

   if (email === "admin@duoc.cl" && password === "Admin123"){
    localStorage.setItem("rol_usuario", "admin");
    window.location = "admin/index.html";}

   else if (email === "vendedor@duoc.cl" && password === "Vendedor1"){
    localStorage.setItem("rol_usuario", "vendedor");
    window.location = "admin/vendedor.html";}

    else if (email === "cliente@gmail.com" && password === "Cliente1"){
    localStorage.setItem("rol_usuario", "cliente");
    window.location = "productos.html";}
    
   else {
    alert("Credenciales incorrectas");}
  
})