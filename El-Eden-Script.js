function filtrarProductos() {
    const busqueda = document.getElementById("buscar").value.toLowerCase();
    if (busqueda === "") {
        alert("Por favor, escribe algo para buscar.");
        return;
    }

    const productos = ["dulces", "bebidas", "pan fresco", "snacks"];
    const resultados = productos.filter(producto =>
        producto.toLowerCase().includes(busqueda)
    );

    if (resultados.length > 0) {
        alert(`Se encontraron los siguientes productos: ${resultados.join(", ")}`);
    } else {
        alert("No se encontraron productos que coincidan con tu búsqueda.");
    }
}

let carrito = [];

function agregarAlCarrito(producto, precio) {
    const item = carrito.find(p => p.nombre === producto);
    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ nombre: producto, precio: precio, cantidad: 1 });
    }
    actualizarCarrito();
    alert(`${producto} se ha agregado al carrito.`);
}

function actualizarCarrito() {
    const carritoSeccion = document.getElementById("carrito");
    carritoSeccion.innerHTML = `
        <h2>Carrito de Compras</h2>
        ${carrito.length === 0 ? "<p>Tu carrito está vacío.</p>" : ""}
        <ul>
            ${carrito.map(item => `
                <li>${item.nombre} - $${item.precio} x ${item.cantidad} = $${item.precio * item.cantidad}</li>
            `).join("")}
        </ul>
        <button onclick="realizarPago()">Ir a Pagar</button>
    `;
}

function realizarPago() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega productos antes de pagar.");
        return;
    }
    let total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    alert(`El total a pagar es: $${total}. Gracias por tu compra.`);
    carrito = [];
    actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".boton-agregar").forEach(boton => {
        boton.addEventListener("click", function () {
            const producto = this.getAttribute("data-producto");
            const precio = parseFloat(this.getAttribute("data-precio"));
            agregarAlCarrito(producto, precio);
        });
    });
});
