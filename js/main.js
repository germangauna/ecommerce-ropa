
// Productos 

const productos = [

    // abrigos
    {
        id:"abrigo-01",
        titulo:"Abrigo 01",
            imagen:"./img/abrigos/img1.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"abrigos"
        },
        pecio:"$1000" 
    },
    {
        id:"abrigo-02",
        titulo:"Abrigo 02",
            imagen:"./img/abrigos/img2.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"abrigos"
        },
        pecio:"$1200" 
    },
    {
        id:"abrigo-03",
        titulo:"Abrigo 03",
            imagen:"./img/abrigos/img3.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"abrigos"
        },
        pecio:"$1300" 
    },
    {
        id:"abrigo-04",
        titulo:"Abrigo 04",
            imagen:"./img/abrigos/img4.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"abrigos"
        },
        pecio:"$1400" 
    },
    {
        id:"abrigo-05",
        titulo:"Abrigo 05",
            imagen:"./img/abrigos/img5.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"abrigos"
        },
        pecio:"$1500" 
    },
    // camisetas
    {
        id:"camiseta-01",
        titulo:"Camiseta 01",
            imagen:"./img/camisetas/imgr1.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"camisetas"
        },
        pecio:"$1000" 
    },
    {
        id:"camiseta-02",
        titulo:"Camiseta 02",
            imagen:"./img/camisetas/imgr2.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"Camisetas"
        },
        pecio:"$1200" 
    },
    {
        id:"camiseta-03",
        titulo:"Camiseta 03",
            imagen:"./img/camisetas/imgr3.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"camisetas"
        },
        pecio:"$1300" 
    },
    {
        id:"camiseta-04",
        titulo:"Camiseta 04",
            imagen:"./img/camisetas/imgr4.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"camisetas"
        },
        pecio:"$1400" 
    },
    {
        id:"camiseta-05",
        titulo:"Camiseta 05",
            imagen:"./img/camisetas/imgr5.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"camisetas"
        },
        pecio:"$1500" 
    },
    // pantalones
    {
        id:"pantalon-01",
        titulo:"Pantalon 01",
            imagen:"./img/pantalones/imgp1.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"pantalones"
        },
        pecio:"$1000" 
    },
    {
        id:"pantalon-02",
        titulo:"Pantalon 02",
            imagen:"./img/pantalones/imgp2.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"pantalones"
        },
        pecio:"$1200" 
    },
    {
        id:"pantalon-03",
        titulo:"Pantalon 03",
            imagen:"./img/pantalones/imgp3.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"pantalones"
        },
        pecio:"$1300" 
    },
    {
        id:"pantalon-04",
        titulo:"Pantalon 04",
            imagen:"./img/pantalones/imgp4.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"pantalones"
        },
        pecio:"$1400" 
    },
    {
        id:"pantalon-05",
        titulo:"Pantalon 05",
            imagen:"./img/pantalones/imgp5.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"Pantalones"
        },
        pecio:"$1500" 
    },

];

// funcion 
// traer los productos a la pagina principal todos los productos

const contenedorProductos = document.querySelector("#contenedor-productos");

//hacer que todsos los botones del aside tengan la clase active

const botonesCategorias = document.querySelectorAll(".boton-categoria");

function cargarProductos(productosElegido) {

    contenedorProductos.innerHTML = "";

    productosElegido.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-detalles">
                            <h3 class="producto-titulo">${producto.titulo}</h3>
                            <p class="producto-precio">${producto.precio}0</p>
                            <button class="producto-agregar">${producto.id} </button>
                        </div>
        `;

        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

 //forEach para que recorra toda la funcion,para que saque el active del boton que no esta clickeado y ponerselo al que si se clickea.


botonesCategorias.forEach(boton =>  {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id );
        cargarProductos(productosBoton);
    })
})
