/*
Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).




Condicionales

Son estructuras o condiciones que nos permiten modificar el orden natural de ejecucion de nuestro progreso. Son sentencias que nos ayudarán a decidir si una condicion se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o variaas instrucciones.


Ejemplo: 
Tengo limpia mi playera de  la suerte?   //Pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false: Entonces me quedo a mimir //respuesta con su posible instruccion

*/

//Condicional if (si)
//If nos sirve para validar si una condicion se cumple o no. Si se cumple, entonces se ejecuta el bloque del codigo que esté dentro del if. Si no se cumple, entonces no se ejecuta nungun bloque de codigo.
/*
if (condicion){
    //Ejecuta este bloque de código
}
*/


/*
Felipe tiene 17 años, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultos (mayores de 18 años). Ayuda a Felipe a decidir si puede ir a la fiesta o no.


Evaluamos solo una expresion (si felipe tiene menos de 18 años), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falsa, no mostrará nada porque nuestro programa no está preparado para esa situación (incertidumbre).
*/
/*
let edadFelipe = 17; //Debemos tomar en cuenta primero la edad de felipe
let edadPermitida = 18;
if (edadFelipe < edadPermitida){
    console.log("Lo siento Felipe, no puedes ir a la fiesta")
}
*/

/*

Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque o codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.

Estructura básica del Else

if (condicion){
    //Este bloque sse ejecuta si la condicion es verdadera
} 
else {
    //Este bloque se ejecuta si la condicion es falsa
} 
*/

/*
let edadAxel = prompt("Ingresa tu edad");
let edadParaEntrarALaFiesta = 18;

if (edadAxel < edadParaEntrarALaFiesta){

    //Se ejecuta cuando es verdadero (que Axel es menor a la edad permitida)
    console.log("Lo siento, no puedes entrar a la fiesta");

} else{
    //Se ejecuta cuando es falso (que axel es mayor a la edad permitida)
    console.log("Felicidades, tienes la edad permitida para entrar a la fiesta!");
}


*/



/*Test de nuestro programa (valores que tambien se evaluan como falsos)

    -"False" (string)
    -NaN
    -false (boolean disparo verdadero)

*/

/*

Else If (además si / si no entonces)

Esta condicional nos ayuda a aejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.

Estructura básica del else if

if (condicion 1){
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa, y si la condicion 2 tambien es falsa
}else{
    //bloque de código que se ejecuta si la condicion 1, 2 y 3 son falsas
}


Se pueden anidar x cantidad de else if, entre el if que evalua la condicion inicial y el else que termina toda la expresión.
*/

/*
edadDeDavid = 16;
edadPermitidaDelAntro = 18;
dineroDeDavid = 20;
coverDelAntro = 150;

if (edadDeDavid > edadPermitidaDelAntro){
    console.log("Muy bien, puedes ir al antro");
} else if (dineroDeDavid > coverDelAntro){
    console.log("Si puedes entrar al antro");
} else {
    console.log("Lo siento, no tienes dinerito suficiente para pagar el cover");
}
*/
/*
let hora = prompt("Ingrese la hora actual");
if (hora < 12){
    console.log("Buenos días");
} else if (hora <=19){
    console.log("Buenas tardes ya, que barbaro como pasa el tiempo");
}else{
    console.log("Buenas noches, vamos a mimir");
}
*/

/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables.
Evalúa una expresión comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.

    -case: Evalúa el caso o condicion asociado que dispara un bloque de codigo
    -break: Terminar el proceso sin que tengamos que pasar por todas las iteraciones o casos.
    -default: Termina el proceso en caso de que ninguna de las evaluaciones sea correcta (similar al else)


switch (expresion o condicion){
    case valor1:
        //codigo que se ejecuta si la condicion es igual al valor1
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}

*/

//Ejemplo de switch

let pisoDestino = prompt("Ingresa el piso al que quieras ir (1 al 5)");

switch(pisoDestino){
    //para jugar con nuestros casos, el tipo de dato debe coincidir para que se ejecute correctamente
    case "1":
        console.log("Vamos a piso 1 (suena musica de elevador de fondo)")
        break;

    case "2":
        console.log("Vamos a piso 2 (suena musica de elevador de fondo)")
        break;

    case "3":
        console.log("Vamos a piso 3 (suena musica de elevador de fondo)")
        break;

    case "4":
        console.log("Vamos a piso 4 (suena musica de elevador de fondo)")
        break;

    case "5":
        console.log("Vamos a piso 5 (suena musica de elevador de fondo)")
        break;

}


//Ejercicio de Evee

var elementoEvolucion = prompt ("Ingresa el elemento con el que evolucionarás a tu pokémon");

switch(elementoEvolucion){
    case "piedraFuego":
        console.log("Tu Evee ha evolucionado a Flareon");
        break

    case "piedraTrueno":
        console.log("Tu Evee ha evolucionado a jolteaon");
        break;

    case "piedraAgua":
        console.log("Tu Eevee evoluciono a Vaporeon");
        break;

    case "esDeMañana":
        console.log("Tu Eevee evoluciono a Espeon");
        break;

    case "esDeNoche":
        console.log("Tu Eevee evoluciono a Umbreon");
        break;

    case "rocaMusgo":
        console.log("Tu Eevee evoluciono a Leafeon");
        break;

    case "rocaHielo":
        console.log("Tu Eevee evoluciono a Glaceon");
        break;

    case "conoceHada":
        console.log("Tu Eevee evoluciono a Sylveon");
        break;

    default:
        console.log("mantienes tu Eevee sin evolucionar");
        break;
}