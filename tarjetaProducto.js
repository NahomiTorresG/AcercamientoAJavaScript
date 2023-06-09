//1.- Obtener los elementos del HTML para guardarlas en variables

//Almaceno el lugar de destino de mi tarjetita en una constante
const container = document.getElementById("product-container");
const agregarProductos = document.getElementById("AgregarProducto");


//Almacenar elementos del formulario en variables de JS// Se trae el objeto completo
let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");





function agregarProducto(){


//Guardo los valores de mis inputs
let valorInputProducto = nombreProducto.value;
var valorInputDescripcion = descripcionProducto.value;
var valorInputImagen = imagenProducto.value;


//Quiero que cada tarjetita tenga su propio div o contenedor
const productCard = document.createElement("div");


//Creo el elemento
productCard.innerHTML = `
<img src="${valorInputImagen}" alt="Producto">
<h3> ${valorInputProducto} </h3>
<p> Descripcion: ${valorInputDescripcion}</p>
<p> Precio: $9.99 </p>
<button class="btn"> Agregar al carrito </button>
`;


//Agregar esa tarjeta de producto al container especificado (Este es el hijo) Instero el elemento
container.appendChild(productCard);
}

//Creamos el evento
agregarProductos.addEventListener("click", agregarProducto);