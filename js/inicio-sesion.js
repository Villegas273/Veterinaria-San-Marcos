
const inputEmail = document.getElementById("input-email")

const inputPassword = document.getElementById("input-password")

const butonInicioSesion = document.getElementById("btn-inicio-sesion")

butonInicioSesion.addEventListener("click", function(){
    
    const email = inputEmail.value

    if (email === "admin@tienda.cl"){
        localStorage.setItem('rol_usuario', 'admin')
        window.location ='admin/index.html'
    }else if (email === "vendedor@tienda.cl"){
        localStorage.setItem('rol_usuario', 'vendedor')
        window.location = 'admin/vendedor.html'
    } else {
        alert("Credenciales incorrectas")
    }
})