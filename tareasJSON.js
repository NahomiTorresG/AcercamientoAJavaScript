//1.- Creamos un arreglo de objetos para nuestras tareas, estas tareas tendran atributos como id, titulo, estatus de completada o no completada

//Esto donde se ejecuta? Del lado del cliente
let tareas = [
    {
        id: 1,
        titulo: "Bañar al perro",
        estatus: true,
    },
    {
        id: 2,
        titulo: "Preparar la comida",
        estatus: false,
    }
]

//Enviar ese arreglo al servidor

let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);



//Ejemplo del carrito de compras


//Declaramos un arreglo de objetos vacío
let carritoDeCompras = [];

//Producto de mi catalogo
let producto ={
    id: 1,
    nombre: "Camisa de Pokemon",
    precio: 299.90,
    cantidad: 1,
};

//Mostrar informacion del carrito de compras
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito");//Se imprime 0

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito");//Se imprime 1


//Actualizar la cantidad de productos en el carrito
let idProductoAModificar = 1; //producto a actualizar
let nuevaCantidad = 3; //cantidad nueva de productos que voy a comprar


//Verifico si mi producto existe dentro del carrito de compras para poder modificarlo, si exsite, actualizo la cantidad, si no, no hago nada. Todo esto se evalua con base en el id que estoy buscando y este debe coincidir con el id del producto que deberia tener dentro de mi carrito de compras.
let productoExiste = carritoDeCompras.find(function(producto){
    return producto.id === idProductoAModificar; //true or false
})
if (productoExiste) {
    productoExiste.cantidad = nuevaCantidad;
}

console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1

console.log(producto);


//Eliminar un producto del carrito
let productoAEliminar = 1; //valor que quiero borrar

//Reviso el id del producto a eliminar en cada uno de los indices de mi arreglo, si encuentro un indice que dentro tenga un objeto que coincida con el id que quiero borrar, entonces lo elimino.
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){
    return producto.id === productoAEliminar; //true o false
});


//Verificar si el indice del elemento que se encontró es válido. Con el findIndex voy a devolver el primer indice del elemento que cumpla con la condicion.   Si no se encuentra el elemento que coincida con la condicion, entonces vamos a devolver un -1, esto para evitar borrar un elemento que no sea, (pensando que tenemos un indice 0)
if (indiceProductoAEliminar !== -1){  //0, 1, 2, 3 disparan true y se activa el if.  Que el -1 dispara un false, y no se activa el if.
    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}


console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //0



//Comprar productos (pagar carrito de compras)

/*
El metodo ForEach es un metodo de arreglos de JS, que nos va a ayudar a poder ejecutar una funcion en cada elemento de nuestro array.

dintaxis de un forEach

array.forEach(function(elemento, indice, arreglo))
*/

let total=0;


//Oye JS, en mi carrito de compras, para cada producto que encuentres, ejecuta una funcion donde tomes un producto como parametros, y al encontrarlo vas a multiplicar el precio de ese producto por su cantidad. Ya que lo hayas hecho, vas a tomar ese valor y lo vas a sumar y a reasignar a la variable llamada total que declaré arriba.

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);


carritoDeCompras.forEach(function(producto){
    total += producto.precio * producto.cantidad
})


console.log("El total de tu carrito de compras es de: ", total);



let carritoJSON = JSON.stringify(carritoDeCompras);
console.log(carritoJSON);



//Vaciar carrito completo
function vaciarCarritoCompleto(){
//Para vaciar todo el carrito
carritoDeCompras = [];
}





/*
//Con funcion flecha 
carritoDeCompras.find(producto => producto.id === productoId);


//Sin funcion flecha

carritoDeCompras.find(function(producto){
    return producto.id === productoID; //true or false
})

*/



/*Funcion para agregar productos al carrito con eventlistener
function agregarProducto{
    carritoDeCompras.push(objeto);
}

boton.EventListener("click", agregarProducto);
*/

