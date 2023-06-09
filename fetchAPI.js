console.log("Inicia Sincrono"); //Se ejecuta esta linea primero
function dosSync(){
    console.log("Se ejecuta la funcion dos");
} //No se ejecuta hasta que se invoque. 

function unoSync(){
    console.log("Se ejecuta la funcion uno");
    dosSync();  //Hasta aqui se ejecuta la funcion dosSync
    console.log("Se ejecuta el codigo tres");

}unoSync(); //Lo segundo que se ejecuta. 


console.log("Fin de Sincrono");


/*Ejemplos de tareas sincronas

-Ciclos
-Invocaciones a funciones
-EventListener (especificamente cuenado necesito el click)
-Condicionales y todo lo que tenga que ver con toma de decisiones


*/


// JavaScript asíncrono
console.log("Inicio de asincrono");
function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000); //tiempo es en milisegundos
}
function unoAsync(){
    dosAsync();
    console.log("Tres");
}
unoAsync();
console.log("Fin de Asincrono");


/*Ejemplos de funciones asíncronas

-Notificaciones de cierre de sesion en apps abiertas
-Spotify con su cola de reproduccion
-Conexiones a servidor
-Carga de APIs
*/


/*
Ya que entendemos que la asincronia nos servira para coonectarnos a un servidor y sin importar que la respuesta de este nos de (exitosa o no), o incluso el tiempo que tarde en responer (milisegundos o segundos), es necesario saber que hay varios mecanismos para manejar operaciones asincronas JS.

    -Callbacks (llamadas de vuelta): La forma más clásica de gestionar la asincronía
    -Promises: forma moderna
    -Async/Await: forma moderna con una sintaxis más ligera
*/


/* 
Que es un callback (llamada de vuelta)

Un callback es una funcion que se pasa como atgumento a otra funcion. Esta funcion se ejecutara despues de que la otra lo haga.
Este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro termine.

Para que lo necesitamos?
Sabemos que JS trabaja de forma descendente, entonces habra casos que queramos hacer que el codigo se ejecute despues de que ocurra otra cosa, y también de forma no secuencial.
*/

/*function hazClick(){
    console.log("Le hiciste click al boton");  //Funcion sincrona
}

const boton = document.getElementById("boton");
boton.addEventListener("click", hazClick);  //Es un callback(mecanismo para manejar cosas asincronas)*/


//Ejemplo de callback

//Defino una funcion que toma un numero y un callback(function) como parametros


//Creamos una funcion llamada dobleNumero, que toma un numero y un callback como argumentos (el callback es una funcion)
function dobleNumero (num, callback){
    const resultado = num * 2; //operacion comun y corriente
    callback(resultado); //invocacion de ese callback con el resultado como parametro
}


//Definir una funcion para mostrar el resultado
function mostrarResultado(resultado){
    console.log("El resultado es: ", resultado)
}

dobleNumero (5, mostrarResultado);

/*
Promises

Son otro mecanismo para manejar la asincronia. Utilizar promesas hace que el codigo sea más legible y practico que usar callback, y como su nombre lo indica es algo que en un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas.
La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola funcion (metodo) para manejar los callbacks.

NOTA: Las promesas son objetos

promise.then

promise.catch



Las promesas tienen estados

    - Pendiente:Es el estado inicial de nuestra promesa, que no se está resolviendo (algo hace que no muestre resultado)
    
    - Fullfiled: Cuando la operacion asincrona se completa con exito (resolve)

    - Rejected (rechazo): Cuando la operacion falla (reject)

Tambien las promesas, al ser un objeto, tienen metodos

-then(function resolve): Ejecuta un callback llamado resolve cuando la promesa se cumple.

-catch(function reject): Ejecuta un callback llamado reject cuando la promesa se rechaza.

-then (resolve, reject): Puedo ejecutar las dos funciones en el mismo metodo then.


*/

//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos(){
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function(resolve, reject){ //el objeto maneja dos funciones (resuelto, rechazo)
        fetch ('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
        .then(function(response){ //espero respuestas...
            if (response.ok){ //propiedad booleana (si o no hay respuesta)
                return response.json();//metodo para convertir la respuesta a un objeto .json
            }else{ //si no...
                throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un nuevo error (404)
            }
        })
        .then(function(data){ //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
            resolve(data);
        })
        .catch(function(error){ //Si no hay una respuesta, resulvo con un rechazo.
            reject(error);
        });
    });
};


// Uso de la promesa

obtenerProductos()
    .then(function(resultado){
    console.log(resultado);
})

    .catch(function(error){
    console.log(error);
});


//Otro ejemplo de promesa para validar un nombre

let nombre = "Felipe";


//El objeto promesa tiene dos posibles soluciones
let promesaNombre = new Promise (function(resolve, reject){
    if (nombre !== "Felipe"){ //si el nombre es distinto de Felipe...
        reject("Error, el nombre no es Felipe"); //entonces rechaza la promesa
    }else{ //si no...
        resolve("Que bien!, el nombre es correcto", nombre); //resuelve la promesa e imprime un dato
    }
});

console.log(promesaNombre);




/*Ejemplo de la PokeApi

    Necesio

    -URL
    -Promesa (con dos posibles caminos rechazo y resolucion)
        -si se resuelve me traigo los datos de la API
        -si no, muestro un error
*/

//Primer bloque para la conexion del servidor
const obtenerPokemon = new Promise((resolve, reject) =>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') //me conecto y busco
    .then(respuesta =>{  //cuando se conecte...
        if(respuesta.ok){  //si la conexion es ok...
            return respuesta.json();  //guardo el dato en .json
        } else {  //si no me conecto...
            throw new Error ("Error 404");  //muestro un error
        }
    })

    //Segundo bloque, (cuando ya me conecté al servidor)
    .then(data =>{  //entonces esos datos...
        resolve(data);  //se usan como parametro de mi resolucion
    }) 

    //Tercer bloque (solo en caso de que no se encuentre informacion)
    .catch (error =>{
        reject("Mensaje de error, no encontramos a tu pokemon" + error);
    });
});


//Ya que le die el mensaje a mi mesero (creacion de la promesa), ahora voy a poder mostrar la informacion si la promesa se resuelve (encuentra la info) o si se rechaza (no encuentra la info)
obtenerPokemon.then (pokemon =>{  //el valor pokemon = datos obtenidos del servidor en .json
    console.log ("Pokemon obtenido ", pokemon.name);
})
.catch(error =>{
    console.log(error);
})




/*
Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTPP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeeto llamado "response", que incluye la repsuesta de la solicitud (a parte de decirnos que la coniexion es ok, "pega" la informacion de lo que estamos consultando).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/


//realizamos la peticion al servidor
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokeRespuesta =>{  //cuando la promesa se resuelve, ejecutamos esta funcion
        return pokeRespuesta.json(); //esta funcion retorna la pokeInfo en un .json
    })

    .then(pokeInfo =>{  //cuando la promesa de la conexion se resuelve, entonces ejecutamos esta otra funcion. Esta funcion guarda la informacion de la respuesta, y lo guarda en una nueva variable llamada pokeInfo.

        //Uso esa variable pra hacer muchas cosas
        console.log("El nomnbre del pokemon es: ", pokeInfo.name, "su numero de la pokedex es: ", pokeInfo.id)
        console.log(pokeInfo);
    })



    .catch(pokeError =>{
        console.log("No encontramos nada de informacion", + pokeError);
    })



const input = document.getElementById("inputPokemon");
const button = document.getElementById("botonPokemon");
const pokemonContainer = document.querySelector("#pokemonContainer");


button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
}
);


    //Manipulacion del DOM + Fetch API
    function traerPokemon(nombrePokemon){
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    
        //guardo la respuesta en .json
        .then(respuesta => respuesta.json())  //Se resuelve la promesa

        //ese .json lo asigno a una variable llamada datos, que usaré para alimentar la función llamada crearPokemon
        .then((datos) =>{
            crearPokemon(datos);
        });
    }


function crearPokemon(nombrePokemon){
    const pokeImg = document.createElement("img");  //creo una etiqueta img
    pokeImg.src = nombrePokemon.sprites.front_default;  //front_default es el nombre de la propiedad donde esta la imagen 


    const h2 = document.createElement("h2"); //creo una etiqueta h2
    h2.innerHTML = nombrePokemon.name; //le pongo el nombre del pokemon a ese h2

    const pokeDiv = document.createElement("div");  //creamos un div para poner mi pokemon

    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);


    //inserto ese div particular en un div general que esta en el html
    pokemonContainer.appendChild(pokeDiv);
}

