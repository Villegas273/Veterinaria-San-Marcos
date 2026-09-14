
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
    {
        id: 1,
        nombre: "Alimento para perros",
        precio: 15990,
        imagen: "admin/img/alimento-perros.png"
    },
    {
        id: 2,
        nombre: "Alimento para gatos",
        precio: 12990,
        imagen: "admin/img/alimento-gatos.png"
    },
    {
        id: 3,
        nombre: "Antiparasitario",
        precio: 8990,
        imagen: "admin/img/antiparasito.png"
    }
];

document.addEventListener("DOMContentLoaded", () => {

    const listaProductos = document.getElementById("Lista-productos");
    const listaCarrito = document.getElementById("lista-carrito");

   function mostrarCarrito() {
    listaCarrito.innerHTML = "";

  carrito.forEach((producto, indice) => {
    listaCarrito.innerHTML += `
    <p>
        ${producto.nombre} - $${producto.precio}
      <button class="btn btn-danger" data-indice="${indice}">
    Eliminar
</button>
    </p>`;
    });

    listaCarrito.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btn-danger")) {

        const indice = evento.target.getAttribute("data-indice");

         carrito.splice(indice, 1);
         
         localStorage.setItem("carrito", JSON.stringify(carrito));

        mostrarCarrito();
    }
    });

    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

    listaCarrito.innerHTML += `
        <h4>Total: $${total}</h4>
    `;
    }

    mostrarCarrito();


    if (!listaProductos) return;

    productos.forEach(producto => {

    listaProductos.innerHTML += `
        <div class="col-md-4">
            <div class="card">

            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">

                <div class="card-body">
                    <a href="detalle-productos.html?id=${producto.id}" class="text-decoration-none">
                     <h5 class="card-title">${producto.nombre}</h5>
                    </a>
                    <p class="card-text">$${producto.precio}</p>

                    <button class="btn btn-primary" data-id="${producto.id}">
                       Añadir al carrito
                    </button>

                </div>

            </div>
        </div>
    `;

});
const botonesCarrito = document.querySelectorAll(".btn-primary");

botonesCarrito.forEach(boton => {

    boton.addEventListener("click", () => {

        const id = boton.getAttribute("data-id");

        const producto = productos.find(producto => producto.id == id);

        carrito.push(producto);

        localStorage.setItem("carrito", JSON.stringify(carrito));

        mostrarCarrito();

        console.log("Producto seleccionado:", id);
        

    });

});
});