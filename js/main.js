
// Productos 

const productos = [

    // abrigos
    {
        id:"Abrigo-01",
        titulo:"Abrigo 01",
            imagen:"../img/abrigos/img1.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"Abrigos"
        },
        pecio:"$1000" 
    },
    {
        id:"Abrigo-02",
        titulo:"Abrigo 02",
            imagen:"../img/abrigos/img2.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"Abrigos"
        },
        pecio:"$1200" 
    },
    {
        id:"Abrigo-03",
        titulo:"Abrigo 03",
            imagen:"../img/abrigos/img3.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"Abrigos"
        },
        pecio:"$1300" 
    },
    {
        id:"Abrigo-04",
        titulo:"Abrigo 04",
            imagen:"../img/abrigos/img4.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"Abrigos"
        },
        pecio:"$1400" 
    },
    {
        id:"abrigo-05",
        titulo:"Abrigo 05",
            imagen:"../img/abrigos/img5.jpg",
        categoria:{
        nombre: "Abrigo",
        id:"Abrigos"
        },
        pecio:"$1500" 
    },
    // camisetas
    {
        id:"Camiseta-01",
        titulo:"Camiseta 01",
            imagen:"../img/camisetas/imgr1.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"Camisetas"
        },
        pecio:"$1000" 
    },
    {
        id:"Camiseta-02",
        titulo:"Camiseta 02",
            imagen:"../img/camisetas/imgr2.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"Camisetas"
        },
        pecio:"$1200" 
    },
    {
        id:"Camiseta-03",
        titulo:"Camiseta 03",
            imagen:"../img/camisetas/imgr3.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"Camisetas"
        },
        pecio:"$1300" 
    },
    {
        id:"Camiseta-04",
        titulo:"Camiseta 04",
            imagen:"../img/camisetas/imgr4.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"Camisetas"
        },
        pecio:"$1400" 
    },
    {
        id:"Camiseta-05",
        titulo:"Camiseta 05",
            imagen:"../img/camisetas/imgr5.jpg",
        categoria:{
        nombre: "Camiseta",
        id:"Camisetas"
        },
        pecio:"$1500" 
    },
    // pantalones
    {
        id:"Pantalon-01",
        titulo:"Pantalon 01",
            imagen:"../img/pantalones/imgp1.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"Pantalones"
        },
        pecio:"$1000" 
    },
    {
        id:"Pantalon-02",
        titulo:"Pantalon 02",
            imagen:"../img/pantalones/imgp2.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"Pantalones"
        },
        pecio:"$1200" 
    },
    {
        id:"Pantalon-03",
        titulo:"Pantalon 03",
            imagen:"../img/pantalones/imgp3.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"Pantalones"
        },
        pecio:"$1300" 
    },
    {
        id:"Pantalon-04",
        titulo:"Pantalon 04",
            imagen:"../img/pantalones/imgp4.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"Pantalones"
        },
        pecio:"$1400" 
    },
    {
        id:"Pantalon-05",
        titulo:"Pantalon 05",
            imagen:"../img/pantalones/imgp5.jpg",
        categoria:{
        nombre: "Pantalon",
        id:"Pantalones"
        },
        pecio:"$1500" 
    },

];

// funcion 

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {

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

cargarProductos();