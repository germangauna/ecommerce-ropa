
// Productos 

const productos = [

    // abrigos
    {
        id:"abrigo-01",
        titulo:"Abrigo 01",
        imagen:"./img/abrigos/img1.jpg",
        categoria:{
        nombre: "Abrigos",
        id:"abrigos"
        },
        precio: 1000
    },
    {
        id:"abrigo-02",
        titulo:"Abrigo 02",
        imagen:"./img/abrigos/img2.jpg",
        categoria:{
        nombre: "Abrigos",
        id:"abrigos"
        },
        precio: 1200
    },
    {
        id:"abrigo-03",
        titulo:"Abrigo 03",
        imagen:"./img/abrigos/img3.jpg",
        categoria:{
        nombre: "Abrigos",
        id:"abrigos"
        },
        precio: 1300
    },
    {
        id:"abrigo-04",
        titulo:"Abrigo 04",
        imagen:"./img/abrigos/img4.jpg",
        categoria:{
        nombre: "Abrigos",
        id:"abrigos"
        },
        precio: 1400 
    },
    {
        id:"abrigo-05",
        titulo:"Abrigo 05",
        imagen:"./img/abrigos/img5.jpg",
        categoria:{
        nombre: "Abrigos",
        id:"abrigos"
        },
        precio: 1500
    },
    // camisetas
    {
        id:"camiseta-01",
        titulo:"Camiseta 01",
        imagen:"./img/camisetas/imgr1.jpg",
        categoria:{
        nombre: "Camisetas",
        id:"camisetas"
        },
        precio: 1000 
    },
    {
        id:"camiseta-02",
        titulo:"Camiseta 02",
        imagen:"./img/camisetas/imgr2.jpg",
        categoria:{
        nombre: "Camisetas",
        id:"Camisetas"
        },
        precio: 1200  
    },
    {
        id:"camiseta-03",
        titulo:"Camiseta 03",
        imagen:"./img/camisetas/imgr3.jpg",
        categoria:{
        nombre: "Camisetas",
        id:"camisetas"
        },
        precio: 1300  
    },
    {
        id:"camiseta-04",
        titulo:"Camiseta 04",
        imagen:"./img/camisetas/imgr4.jpg",
        categoria:{
        nombre: "Camisetas",
        id:"camisetas"
        },
        precio: 1400 
    },
    {
        id:"camiseta-05",
        titulo:"Camiseta 05",
        imagen:"./img/camisetas/imgr5.jpg",
        categoria:{
        nombre: "Camisetas",
        id:"camisetas"
        },
        precio: 1500
    },
    // pantalones
    {
        id:"pantalon-01",
        titulo:"Pantalon 01",
        imagen:"./img/pantalones/imgp1.jpg",
        categoria:{
        nombre: "Pantalones",
        id:"pantalones"
        },
        precio: 1000
    },
    {
        id:"pantalon-02",
        titulo:"Pantalon 02",
        imagen:"./img/pantalones/imgp2.jpg",
        categoria:{
        nombre: "Pantalones",
        id:"pantalones"
        },
         precio: 1200 
    },
    {
        id:"pantalon-03",
        titulo:"Pantalon 03",
        imagen:"./img/pantalones/imgp3.jpg",
        categoria:{
        nombre: "Pantalones",
        id:"pantalones"
        },
        precio: 1300 
    },
    {
        id:"pantalon-04",
        titulo:"Pantalon 04",
        imagen:"./img/pantalones/imgp4.jpg",
        categoria:{
        nombre: "Pantalones",
        id:"pantalones"
        },
        precio: 1400
    },
    {
        id:"pantalon-05",
        titulo:"Pantalon 05",
        imagen:"./img/pantalones/imgp5.jpg",
        categoria:{
        nombre: "Pantalones",
        id:"Pantalones"
        },
        precio: 1500 
    }

];

// funcion 
//elemetos del DOM
// traer los productos a la pagina principal todos los productos

const contenedorProductos = document.querySelector("#contenedor-productos");

//hacer que todsos los botones del aside tengan la clase active

const botonesCategorias = document.querySelectorAll(".boton-categoria");


//Hacer una contante para que cada boton del aside tenga su titulo
const   tituloPrincipal = document.querySelector("#titulo-principal");

//Variable para que funcionen los botones agregar en el carrito
let  botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-detalles">
                            <h3 class="producto-titulo">${producto.titulo}</h3>
                            <p class="producto-precio">${producto.precio}</p>
                            <button class="producto-agregar" id = " ${producto.id}" >Agregar</button>
                        </div>
        `;

        contenedorProductos.append(div); // se hace el append del que contine a los productos
    })
    actualizarBotonesAgregar();
  console.log(botonesAgregar);
}

cargarProductos(productos);

 //forEach para que recorra toda la funcion,para que saque el active del boton que no esta clickeado y ponerselo al que si se clickea.


botonesCategorias.forEach(boton =>  {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id != "todos" ){ // este todos es del id que le pusimos en el html
            
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id );
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id );
             cargarProductos(productosBoton);
            }  else {
                    tituloPrincipal.innerText = "Todos los Productos";
                   cargarProductos(productos);
                
            }
    })  
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productoEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    console.log (productoEnCarrito.some(producto => producto.id === idBoton))

   productoEnCarrito.push(productoAgregado);
   

   }