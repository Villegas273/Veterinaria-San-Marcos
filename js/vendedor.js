
const rol_usuario = localStorage.getItem('rol_usuario')

if (rol_usuario != 'vendedor') {
    window.location = '../index.html'
}