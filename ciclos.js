/*
Bucles e iteración

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones (funciones, condicionales, info entre llaves/parentesis), o lo que ees lo mismo, repetir una tarea las veces que queramos. Gracias a esto vamos a poder automatizar tareas repetitivas

-While (mientras)
-Do while (hacer mientras)
-For (para)



While (mientras)
Este bucle nos sirve para realizar una tarea repetetitiva mientras una condicion sea VERDADERA a diferencia del If que ejecuta una vez y ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE


*/
/*
//Estructura basica de una while

while(tenerSueño){
    //dormir
}
*/

/*
let rolDeUsuario = "registrado"; //esto ya esta definido


while (!"registrado") { //la evaluacion es sobre el rol
    
    function registrarUsuario(){
        console.log("Usuario Registrado");
    }

}


dejaloComprar();
*/


//codigo de mi sopita de verduritas con pollo

//Declaro e inicializo un array con mis ingredintes
var ingredientes = ["zanahorias", "cebollas", "apio", "papas", "espinacas", "pollito"]; //6 elementos


//Declaramos una variable llamada contador inicializada en 0, para usarla como un contador
var ingredientesAgregadosALaOlla = 0;


//mientras los ingredientes agregados a la olla sean menos que los ingredientes que quedan disponibles...
while (ingredientesAgregadosALaOlla<ingredientes.length){
    
    //...ire agregando ingredientes a la olla...
    console.log("Agregando " + ingredientes.length [ingredientesAgregadosALaOlla] + " a la olla");

    //... y voy aumentando el contador para saber cuando parar
    ingredientesAgregadosALaOlla ++;
}

console.log("La sopita ya está lista, yumi.");


//Se deja con length por si queremos agregar más elementos al final, ya que si ponemos un numero exacto y quisieramos agregar más, se tiene que ir cambiando el valor del contador


/*Casos de uso del ciclo while

-Para verificar si un usuario esta registrado o no
-Verificamos la disponibilidad de un producto (stock)
-Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizar informacion, etc.)
-Recorrer publicaciones de un usuario
-Contador de likes
*/


/*
Do - while (hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esta garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa

do{
    //bloque de codigo que vamos a ejecutar
} while (condicion);


*/
console.log("Ejemplo de galletitas con Do-While");

//variable tiempo de coccion que servirá como contador
var tiempoTranscurridoDeCoccion = 0;

//usamos el ciclo do-while

do{
    console.log("Horneando las galletas...");
    tiempoTranscurridoDeCoccion +=5;

//Todo el bloque de código se va a evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se pueden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo puede que las galletas se quemen.

//Esto es como si revisaramos el horno cada 5 minutos

}while (tiempoTranscurridoDeCoccion<30);

console.log("Las galletas ya están listas");


/*
For (para)
Se utiliza cuando se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.


*/



console.log("---->Ejemplo de la pizza con For<----");

var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "hornear la pizza"];//3 pasos

var tiempoPorPaso = [15, 10, 20];

for (var i = 0; i < pasosDeReceta.length; i++);{

    console.log("Realizando paso " + pasosDeReceta[i])
    console.log("Esperando " + tiempoPorPaso[i] + "minutos");
}
console.log("Disfruta tu pizza");




console.log("Ejemplo contador con FOR, contador de cohetes.")

for (let i = 10; i>0; i--){
    console.log("Faltan " + i + " segundos para el despegue");
}



console.log("--->Ejemplo de for para cupones de descuento<---");

for(let cupones = 10; cupones>0; cupones --){
    console.log("Tienes un cupon de descuento, nos quedan " + cupones);
}