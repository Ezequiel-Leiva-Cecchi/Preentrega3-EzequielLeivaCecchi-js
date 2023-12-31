let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const productosArray = [
    // Productos Lenovo
    {
        id: "lenovo-01",
        titulo: "Lenovo legion 7i",
        image: "./assets/Lenovo/Lenovo_Legion_7i-16.jpg",
        categoria: {
            nombre: "lenovos",
            id: "lenovo"
        },
        precio: 799.999
    },
    {
        id: "lenovo-02",
        titulo: "Lenovo ideopad 3",
        image: "./assets/Lenovo/Lenovo-ideapad-3.jpg",
        categoria: {
            nombre: "lenovos",
            id: "lenovo"
        },
        precio: 203.039
    },
    {
        id: "lenovo-03",
        titulo: "Lenovo thinkpad",
        image: "./assets/Lenovo/Lenovo-Thinkpad-X1-Yoga-4ta-Gen.jpg",
        categoria: {
            nombre: "lenovos",
            id: "lenovo"
        },
        precio: 877.351
    },
    {
        id: "lenovo-04",
        titulo: "Lenovo thinkpad fold",
        image: "./assets/Lenovo/lenovo-thinkpad-x1-fold-9.jpg",
        categoria: {
            nombre: "lenovos",
            id: "lenovo"
        },
        precio: 999.998
    },
    {
        id: "lenovo-05",
        titulo: "Lenovo Yoga Slim 7i",
        image: "./assets/Lenovo/Lenovo-Yoga-Slim-7i-Pro-OLED.png",
        categoria: {
            nombre: "lenovos",
            id: "lenovo"
        },
        precio: 685.999
    },
    {
        id: "lenovo-06",
        titulo: "Lenovo Legion 5 Pro",
        image: "./assets/Lenovo/lenovo-legion-5-pro-storm-grey-1.jpg",
        categoria: {
            nombre: "lenovos",
            id: "lenovo"
        },
        precio: 799.999
    },
    {
        id: "lenovo-07",
        titulo: "Lenovo thinkpad L14",
        image: "./assets/Lenovo/Lenovo-L14.jpg",
        categoria: {
            nombre: "lenovos",
            id: "lenovo"
        },
        precio: 825.999
    },
    {
        id: "lenovo-08",
        titulo: "Lenovo thinkpad T16",
        image: "./assets/Lenovo/Lenovo-Thinkpad-T16.jpeg",
        categoria: {
            nombre: "lenovos",
            id: "lenovo"
        },
        precio: 856.999
    },
    // Productos Asus
    {
        id: "Asus-01",
        titulo: "Asus gaming dash f15",
        image: "./assets/Asus/asus-tuf-gaming-dash-f15.jpg",
        categoria: {
            nombre: "Asus",
            id: "asus"
        },
        precio: 729.999
    },
    {
        id: "Asus-02",
        titulo: "Asus Vivobook 16X ",
        image: "./assets/Asus/asus_vivobook_pro_16x_3d_oled_k6604_2.jpg",
        categoria: {
            nombre: "Asus",
            id: "asus"
        },
        precio: 999.600
    },
    {
        id: "Asus-03",
        titulo: "Asus Zenbook Duo 14",
        image: "./assets/Asus/Asus-Zenbook-duo-14.jpg",
        categoria: {
            nombre: "Asus",
            id: "asus"
        },
        precio: 999.689
    },
    {
        id: "Asus-04",
        titulo: "Asus VivoBook R5",
        image: "./assets/Asus/Asus-VivoBook-15-R5.jpg",
        categoria: {
            nombre: "Asus",
            id: "asus"
        },
        precio: 864.999
    },
    {
        id: "Asus-05",
        titulo: "Asus X5 15ea(11va Gen)",
        image: "../assets/Asus/Asus-X5-15EA.jpg",
        categoria: {
            nombre: "Asus",
            id: "asus"
        },
        precio: 609.804
    },
    {
        id: "Asus-06",
        titulo: "Asus gaming 15.6",
        image: "./assets/Asus/asus_g513qr_es96_15_6_republic_of_gamers_.jpg",
        categoria: {
            nombre: "Asus",
            id: "asus"
        },
        precio: 579.999
    },
    {
        id: "Asus-07",
        titulo: "Asus 14 UX425 (11va Gen)",
        image: "./assets/Asus/Asus-14.jpg",
        categoria: {
            nombre: "Asus",
            id: "asus"
        },
        precio: 686.262
    },
    {
        id: "Asus-08",
        titulo: "Educative Asus BR1100C",
        image: "./assets/Asus/Asus-Educative.jpeg",
        categoria: {
            nombre: "Asus",
            id: "asus"
        },
        precio: 239.999
    },
    // Productos Hp
    {
        id: "HP-01",
        titulo: "Hp pavilion",
        image: "./assets/HP/HpPavilion11-x360-2015__5_.jpg",
        categoria: {
            nombre: "HPs",
            id: "HP"
        },
        precio: 344.999
    },
    {
        id: "HP-02",
        titulo: "Hp 14 Athio",
        image: "./assets/HP/hp-14-Athion.jpg",
        categoria: {
            nombre: "HPs",
            id: "HP"
        },
        precio: 229.999
    },
    {
        id: "HP-03",
        titulo: "Hp 15 S",
        image: "./assets/HP/hp-15s-dr0002tx-lapt.jpg",
        categoria: {
            nombre: "HPs",
            id: "HP"
        },
        precio: 820.999
    },
    {
        id: "HP-04",
        titulo: "Hp fhd touch 15",
        image: "./assets/HP/Hp-fhd-touch-15.jpg",
        categoria: {
            nombre: "HPs",
            id: "HP"
        },
        precio: 903.067
    },
    {
        id: "HP-05",
        titulo: "Hp ProBook",
        image: "./assets/HP/Hp-ProBook.jpg",
        categoria: {
            nombre: "HPs",
            id: "HP"
        },
        precio: 672.956
    },
    {
        id: "HP-06",
        titulo: "Hp dual core",
        image: "./assets/HP/notebook-hp-dualcore.jpg",
        categoria: {
            nombre: "HPs",
            id: "HP"
        },
        precio: 937.940
    },
    {
        id: "HP-07",
        titulo: "Hp 15 intel quad",
        image: "../assets/HP/hp-15-intel-quad-core.jpg",
        categoria: {
            nombre: "HPs",
            id: "HP"
        },
        precio: 622.665
    },
    {
        id: "HP-08",
        titulo: "Hp 14 Convertible",
        image: "../assets/HP/HP_14_Convertible_11th_Gen_i5_8GB_512GB_14”_Silver_laptop.jpg",
        categoria: {
            nombre: "HPs",
            id: "HP"
        },
        precio: 438.810
    }
];
const contenedor = document.getElementById("contentProducts");
const cartItem = document.getElementById("cartItems");
localStorage.clear
for (let i = 0; i < productosArray.length; i++) {
    contenedor.innerHTML += `
   <div class ="product">
   <img src="${productosArray[i].image}">
   <div class="product-info">
       <h4 class="priduct-title">${productosArray[i].titulo}</h4>
       <p class="product-price">$${productosArray[i].precio}</p>
       <button class = "product-btn" onclick="agregarAlCarrito(${i})">Agregar al carrito</button>
       </div>
   </div>
   `
}
function agregarAlCarrito(i) {
   
    carrito.push(productosArray[i]);

    localStorage.setItem('carrito', JSON.stringify(carrito));
}