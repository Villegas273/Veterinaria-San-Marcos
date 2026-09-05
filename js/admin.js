
const rol_usuario = localStorage.getItem('rol_usuario')

if (rol_usuario != 'admin') {
    window.location = '../index.html'
}