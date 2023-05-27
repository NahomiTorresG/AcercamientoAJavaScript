//alert("Estoy vivo!");

//Este es un comentario de una sola línea
/*Este
es
un
comentario
multilíneo
*/
/*Variables: Es un elemento que cambia. Es un elemento del cual su valor puede cambiar o variar dependiendo las circunstancias. Esta variable ocupa un espacio de memoria y dependiendo del valor o del elemento que esté dentro de este espacio, es el tipo de variable que tenemos. 

La variable es igual al recipiente donde pondremos el valor
valor=informacion con la que llenamos el recipiente

Declarar= ponerle nombre a nuestro recipiente
Inicializar= llenar el recipiente
*/


recipiente = "agua";
recipiente = "cafe";
recipiente = "colores y lapices";
recipiente = "leche";

//Usamos esta linea de codigo para imprimir o mostrar la informacion de mi recipiente

console.log(recipiente);

//Declarar o inicializar

/*Quieres ser mi novio o novia? = no ;
edad;
altura;
peso;
genero;*/


/*
Tipos de datos/Tipos de contenedores (primitivos y no primitivos)

*son primitivos porque ya vienen con el lenguaje, la unión de ese tipo de datos puede dar datos más complejos, se consideran el dato más simple o más básico que existe.

    -String: Sirve para agregar valores en forma de texto. Para que see considere así, el valor debe estar dentro de comillas simples (''), dobles ("") y backticks (``)
    
    -number: Sirve par agregar valores en formato numerico (para poder usarlos en operaciones aritmeticas). Estos valores no usan comillas. Permite usar numeros enteros, fracciones, números negativos

    -boolean: Sirven para representar valores del tipo true o false (encendido o apagado, 0 y 1, sí y no)

    -undefined: sirve para representar una variable o un tipo de dato que existe pero que no tiene un valor. cuando declaramos variables sin inicializar, tendremos datos del tipo undefined.

    -null: Sirve para definir que un valor es nulo. 

    -NaN (Not a Number): Sirve para representar un valor que no es un número. Lo obtenemos si hacemos una operación con una variable que no es un número o con una operación que no es posible. 

    -symbol: Es como la CURP, todos los mexicanos la tenemos


    -object (no es primitivo): es el megazord con los demás tipos de datos dentro

*/

//Ejemplo de concatenación
apodoDeFelipe = "El `amante numero uno` de los chilaquiles verdes";
console.log(apodoDeFelipe); 

edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.80

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe)

//Ejemplos de valores booleanos
esAdministrador = true;
contraseñaCorrecta = false;
cuentaPremium = false;

//Ejemplos de datos indefinidos
//respuestaDeMiCrush;
//precioDelEstacionamiento;




//Ejemplos de valores null
respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);


//Ejemplo con valores NaN
operacionMatematica = 0/0;
console.log(operacionMatematica);


/*TypeOf 
Es una expresión que nos ayuda a saber que tipo de dato es el que estamos evaluando

typeof(elDatoAEvaluar)

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando
*/


//TypeOf
console.log(typeof(esAdministrador)); //boolean
console.log(typeof(edadDeFelipe)); //number




/*TIPOS DE VARIABLES
En JavaScript tenemos 3 tipos principales de variables:

    -Var: Se utilizaba como forma principal de declarar variables. Es una variable muy flexible, tiene un scope o alcance global, esto es, que el valor de esta variable está disponible en todo el programa


    -Let: Se utiliza para limitar el alcance de nuestras variables (scope), y se limita a un bloque de código o expresión (meter a la mama de bambi en una cajita). Es una variable local.

    -Const: Se usan para declarar una variable con un valor constante o inmutable (que no cambie)


*/
//En este caso, la mamá de Bambi está visible desde cualquier lugar del programa
var mamaDeBambiViva = false;

var cazador = "listo para disparar";


let nombre = "Felipe Maqueda";

const pi = 3.1416;


/* 
Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.

Parámetros: variables que necesitamos para alimentar mi funcion (todas las variables se tienen que utilizar)
Ejemplo: Limon, azucar, vasito de agua, cucharita, hielos, agua.

Nombre de la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: preparAguitaDeLimon

Operaciones: conjunto de instrucciones (en orden especifico)
Ejemplo: 1)Cortar el limon, 2)Exprimir el limon, etc.

Resultado: Las funciones generalmente deben tener un resultado
Ejemplo: Vasito de agua de limon

*/

//1-Creamos la funcion con la palabra reservada function y le ponemos un nombre. Después, abrimos y cerramos parentesis y abriremos y cerraremos llaves {}. Los parentesis son para nuestros parámetros o rgumentos y nuestras llaves para delimitar el bloque o la funcion.

//2- Ponemos nuestros parámetros (variables) dentro del parentesis

//3- Poner las instrucciones dentro de las llaves, utilizando los parametros o argumentos.

//4.- Invocar la funcion escribiendo su nombre y abrimos y cerramos parentesis


let limon = "limon";
let agua = "agua";
let hielos = "hielos";
let azucar = "azucar";
let vaso = "vaso";
let cuchara = "cuchara";




function prepararAguitaDeLimon(){

let limon = "limon";
let agua = "agua";
let hielos = "hielos";
let azucar = "azucar";
let vaso = "vaso";
let cuchara = "cuchara";

    console.log("Cortar el limon " + limon);
    console.log("Exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso " + vaso);
    console.log("Agregamos los hielos al vaso " + hielos);
    console.log("Agregamos el agua al vaso " + agua);
    console.log("Endulzamos al gusto " + azucar);
    console.log("Mezclar y disfrutar " + cuchara);
    console.log("Que rica aguita de limon ");



}


prepararAguitaDeLimon();


//Ejemplo de las 3 formas de agregar parametros a funciones


//Forma 1.-Usando parametros dentro de parentesis
function suma(a, b){ //Valores están indefinidos

    a = 5;  //cambio el undefined por 5
    b = 7;  //cambio el undefined por 7

    operacion = a + b; //hago mi suma utilizando los dos valores

console.log(operacion); //imprimir mi operación
}

suma(); //Invocamos la funcion


//Segunda forma 2.- Usando los valores dentro del parentesis, ya inicializados

function resta (a=8, b=5){
    operacion = a - b;
    console.log(operacion);
}
resta();


//Tercer forma 3.- Inicializando valores dentro de la invocación
function multiplicacion (a, b){
    operacion = a * b;
    console.log(operacion);
}

multiplicacion(3, 9);
multiplicacion(5, 7);
multiplicacion(13, 9);
multiplicacion(36, 97);
multiplicacion(11, 80);
multiplicacion(10, 3);
multiplicacion(13, );//Se imprime NaN porque nos falta un parámetro


//Funciones anonimas

let funcionAnonima = function (a, b){
    operacion = a / b;
    console.log(operacion)
}

funcionAnonima(10, 5);


//Return: La sentncia return finaliza la ejecución de la función, y especifica un valor para ser devuelto a quien llama la funcion. O lo que es lo mismo, usamos return para finalizar y tambien para poder asignar el resultado a una variable.


//Funcion para dar un saludo personalizado
//Primero defino mi función
function saludo (){

    //declaro e inicializo mi valor del nombre
    let nombreSaludo = "Felipe";

    //Uso ese nombre para personalizar mi saludo
    console.log ("Hola "+ nombreSaludo + " bienvenida!");

    //Finalizo la ejecucion de mi funcion, y tomo el dato de la variable llamada nombreSaludo para poder verla (recordemos que esta en un contexto local) y para poder usarla despues en otras operaciones.
    return nombreSaludo; //Limbo de las variables
}


//Para poder usar esa variable que hasta este momento sacamos de la funcion, pero que no sabemos donde esta (porque esta en el limbo de las funciones). Y en esta nueva variable ponemos la invocacion de la funcion.


saludo("Nahomi");

const nombreQueSaqueDeMiFuncion = saludo ();
console.log(nombreQueSaqueDeMiFuncion);

var nombreIngresadoDesdeElNavegador = prompt("Introduce tu nombre");
console.log ("Gracias por entrar a mi página " + nombreIngresadoDesdeElNavegador)