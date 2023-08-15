let nav = document.querySelector("#nav");
let abrir = document.querySelector("#abrir");
let cerrar = document.querySelector("#cerrar");
abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");
})
