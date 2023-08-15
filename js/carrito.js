let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const borrarDeCarrito = document.getElementById("vaciarCarrito");
borrarDeCarrito.onclick = vaciarCarrito;

function mostrarProductosEnCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoLista = document.getElementById('carrito-lista');

    carritoLista.innerHTML = '';

    carrito.forEach((producto, index) => {
        let li = document.createElement('li');
        li.textContent = producto.titulo + " - $" + producto.precio; // Modifica esta línea
        li.innerHTML += `<button onclick="eliminarProducto(${index})">Eliminar</button>`;
        carritoLista.appendChild(li);
    });
}

function eliminarProducto(index) {
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarProductosEnCarrito();
    }
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    carrito = [];
    mostrarProductosEnCarrito();
}

window.onload = function () {
    mostrarProductosEnCarrito();
};