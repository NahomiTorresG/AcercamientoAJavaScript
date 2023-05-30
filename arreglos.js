/*

Arreglos (Arrays, matrices, colecciones de datos)


En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.


*/

//Formas de declarar un array o arreglo
//1.- usando los corchetes [] (más común)
var miArray = [1, 2, 3, 4, 5, 6];


//Variable sin inicializar
var colores;


//Arreglo sin asignar a una variable
["azul", "rojo", "naranja", "verde"];


//variable colores declarada e inicializada
var colores = ["azul", "rojo", "naranja", "verde" ["Verde Pastel", "Amarillo Pastel", "Rosa Pastel"]];


//Podemos tener distintos tipos de datos en un mismo arreglo
var datosDeFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined, null];



//Cada asignatura está asociada a una variable individual
var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3 = "Fisica";

//Array
var asignaturas = ["Matematicas", "Literatura", "Fisica"];

console.log(asignaturas)



//Acceso a elementos de un array
console.log("El elemento en la poscicion 2 de mis asignaturas es: " , asignaturas [2])


//Si accedemos a un elemento que no existe, nos mostrará un undefined porque el espacio existe pero no tienen ningún valor
console.log("El elemento en la posicion2 de mis asignaturas es: " , asignaturas[10]);

//Mostrar la longitud de mi arreglo:
console.log(asignaturas.length); 




//Ejemplos de arrays


var carrito = ["pantalon", "camisa", "corbata"];

var publicacion = ["Felipe", 137, "29-Mayo-2023"];

console.log(publicacion);

//Modificar los elementos dentro del array

//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index
publicacion[1] = 138;
console.log(publicacion);


//No teníamos un elemento en la posicion (index) 4 (indefinido = 150)
publicacion[4] = 150;



//Metodo para agregar elementos al final de un arreglo
asignaturas.push("Biologia");
console.log(asignaturas);

asignaturas.push("Ingles");
console.log(asignaturas);



//Metodo para eliminar el último elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);



//Metodo para agregar elementos al principio de un arreglo
asignaturas.unshift("Quimica");
console.log(asignaturas);



//Método para eliminar elementos del principio de un arreglo
asignaturas.shift();


//Método para saber si mi arreglo incluye un elemento especifico
let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas Marías", "Mazapan"];
regalo = console.log(carritoDeWalmart.includes("Coquita"));

if (regalo = true){
    console.log("Te regalo un sarten");
}




var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Mariana"];

var mejoresAmigos;
var publico;
if (!amigos){
    console.log("Mi meme de bob esponja");
}



//Metodo para concatenar arreglos
var listaDeGolosinas = ["Gansitos", "Coquita", "Galletas Marías", "Mazapan"];
var listaDeFrutitasYVerduritas = ["Manzanas", "mangos", "toronjas", "platanos", "fresas"];
var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutitasYVerduritas);

console.log(listaDeComprasDeLaQuincena);



//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparicion. Si el elemento no se encuentra, retorna -1
console.log(listaDeComprasDeLaQuincena.indexOf("toronjas"))



//Metodo para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join("***"));






//Métodos splice, reverse, sort, toStrig

//Método para modificar un array (eliminando, reemplazando y agregando elementos)
console.log(listaDeComprasDeLaQuincena.splice(3, 1)); //Aquí borró un elemento a partir del elemento 3 que fue Mazapán

console.log(listaDeComprasDeLaQuincena.splice(3, 1, "uvas")); //Este afectará a manzanas porque ya ocupaba el elemento 3

console.log(listaDeComprasDeLaQuincena.splice(6,0, "brócoli","zanahorias")); //Aquí se agregaron dos elementos más después de la posición 6. Se debe usar cero para indicar que no se está reeemplazando ni eliminando otros elementos.

console.log(listaDeComprasDeLaQuincena);//Aquí ya aparecen todos los cambios realizados.


//Método para invertir el orden de los elementos en el array
console.log(listaDeComprasDeLaQuincena.reverse());


//Método para ordenar los elementos de un array alfabéticamente o numéricamente. Este método ordena los elementos como cadenas de texto por defecto, incluso cuando se trata de números.
console.log(listaDeComprasDeLaQuincena.sort()); //aparecen diferentes porque son dos listas pero sí están ordenadas alfabéticamente


//Método para convertir en cadena de texto lo que está dentro del array 
console.log(listaDeComprasDeLaQuincena.toString());