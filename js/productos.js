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

document.addEventListener("DOMContentLoaded", function () {

    const listaProductos = document.getElementById("Lista-productos");
    const listaCarrito = document.getElementById("lista-carrito");

    // Mostrar productos
    productos.forEach(function (producto) {

        listaProductos.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="card">

                    <img src="${producto.imagen}"
                         class="card-img-top"
                         alt="${producto.nombre}">

                    <div class="card-body">

                       <a href="detalle-productos.html?id=${producto.id}" class="text-decoration-none">
                          <h5 class="card-title">
                            ${producto.nombre}
                          </h5>
                       </a>

                        <p class="card-text">
                            $${producto.precio}
                        </p>

                        <button
                            class="btn btn-primary btn-agregar"
                            data-id="${producto.id}">
                            Añadir al carrito
                        </button>

                    </div>

                </div>

            </div>
        `;
    });


    // Botones añadir
    const botones = document.querySelectorAll(".btn-agregar");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const id = Number(this.dataset.id);

            const producto = productos.find(function (producto) {
                return producto.id === id;
            });

            carrito.push(producto);

            mostrarCarrito();

            console.log("Producto agregado:", producto);

        });

    });


    // Mostrar carrito
    function mostrarCarrito() {

        if (!listaCarrito) return;

        listaCarrito.innerHTML = "";

        if (carrito.length === 0) {

            listaCarrito.innerHTML = `
                <p>El carrito está vacío.</p>
            `;

            return;
        }


        carrito.forEach(function (producto, indice) {

            listaCarrito.innerHTML += `
                <div class="card mb-2">

                    <div class="card-body">

                        <h6>
                            ${producto.nombre}
                        </h6>

                        <p>
                            $${producto.precio}
                        </p>

                        <button
                            class="btn btn-danger btn-sm"
                            onclick="eliminarProducto(${indice})">
                            Eliminar
                        </button>

                    </div>

                </div>
            `;

        });


        const total = carrito.reduce(function (suma, producto) {
            return suma + producto.precio;
        }, 0);


        listaCarrito.innerHTML += `
            <hr>
            <h5>
                Total: $${total}
            </h5>
        `;
    }


    mostrarCarrito();

});


// Eliminar producto
function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Volver a mostrar
    const listaCarrito = document.getElementById("lista-carrito");

    listaCarrito.innerHTML = "";

    carrito.forEach(function (producto, indice) {

        listaCarrito.innerHTML += `
            <div class="card mb-2">

                <div class="card-body">

                    <h6>${producto.nombre}</h6>

                    <p>$${producto.precio}</p>

                    <button
                        class="btn btn-danger btn-sm"
                        onclick="eliminarProducto(${indice})">
                        Eliminar
                    </button>

                </div>

            </div>
        `;
    });

    const total = carrito.reduce(function (suma, producto) {
        return suma + producto.precio;
    }, 0);

    listaCarrito.innerHTML += `
        <hr>
        <h5>Total: $${total}</h5>
    `;
}