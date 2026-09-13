
const parametros = new URLSearchParams(window.location.search);

const idProducto = parametros.get("id");

console.log(idProducto);

const productoSeleccionado = productos.find(producto => producto.id == idProducto);

console.log(productoSeleccionado);

document.addEventListener("DOMContentLoaded", () => {

    const detalleProducto = document.getElementById("detalle-producto");

    detalleProducto.innerHTML = `
    <div class="col-md-6">
        <img src="${productoSeleccionado.imagen}" class="img-fluid" alt="${productoSeleccionado.nombre}">
    </div>

    <div class="col-md-6">
        <h2>${productoSeleccionado.nombre}</h2>
        <h4>$${productoSeleccionado.precio}</h4>

        <p>
            Producto de calidad para el cuidado de tu mascota.
        </p>

        <div class="d-flex gap-2">
            <button class="btn btn-primary" id="btn-agregar">
              Añadir al carrito
            </button>

            <a href="productos.html" class="btn btn-secondary">
                Volver a productos
            </a>
        </div>
    </div>
`;
 const botonAgregar = document.getElementById("btn-agregar");

 botonAgregar.addEventListener("click", () => {
    carrito.push(productoSeleccionado);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto añadido al carrito");
});
});