/*

Operadores

Los operadores nos permiten realizar una operacion en una o varios operandos (variables o datos)

    -Operadores de asignacion
    -Operadores de cadena
    -Operadores logicos
    -Operadores de comparacion
    -Operadores aritmeticos
    -


Operadores de asignación (=)

Los operadores de asignacion (=) se utilizan para asignarle valor a una variable. signa un valor al operando de la izquierda basado en el valor del operador de la derecha



*/

//Operadores de asignación

let edadDeFelipe = 31;
var recipiente = "cafe";


/*
Operadores de comparación (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de comparacion nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relacion de sus valores.
*/

let numero1 = 13;
let numero2 = 25;
let numero3 = 25;

//Operador menor que
console.log ("El valor 13 es menor que el valor 25? " + (numero1<numero2));

//Operador mayor que
console.log ("El valor 13 es menor que el valor 25? " + (numero1>numero2));

//Operador mayor o igual que
console.log ("El valor 13 es menor que el valor 25? " + (numero2>=numero3));

//Operador de igualdad
console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3));

//Operador de igualdad estricta (evalua el valor y evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3));


//!= (not) Operador de desigualdad
console.log("El valor 13 no es igual al valor 25? " + (numero1 != numero2))


//Operador de desigualdad estricta !==
console.log("El valor 25 no es igual al valor 25? " + (numero2 !== numero3))



/*

Operadores logicos (&& (and), || (or), ! (not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no), una condicion. EL resultado será un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y, los podemos poner en un orden especifico).
*/

/*AND (&&)

    -Sirve para determinar si dos expresiones son verdaderas. Si ambas expresiones son verdaderas, el resultado es verdadero.
    -Si una de las dos expresiones es falsa, todo el resultado es falso



OR (||)
Sirve para determinar si dos expresiones son falsas.

    -si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    si las dos afirmaciones son falsas, todo es falso.



NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo


*/

//Ejemplo con AND &&

var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 < num2); //Verdadero
afirmacion2 = (num1 != num2); //verdadero

console.log(afirmacion1 && afirmacion2);

//Ejemplo con OR ||

afirmacion3 = (num1 > num2); //verdadero
afirmacion4 = (num1 !== num2);

console.log(afirmacion3 || afirmacion4);


//Ejemplo con NOT !
console.log(!afirmacion3);
console.log(!afirmacion4);


//Ejercicio de combinacion de operaciones





num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);
console.log(op)

/*
(num5>num2: true     num4<num3: false): false

(num1===num2:false but (!): true      num3!= false): true

total: true
*/



/*
Operadores aritmeticos (+, -, *, /, %, **, ++, --)

    + (suma): suma dos o mas valores numericos
    - (resta): dos o mas valores numericos
    * (multiplicacion): Multiplica dos o mas valores numericos
    / (division): divide dos o mas valores numericos
    %(modulo o residuo): retorna el residuo de una division
    ** (exponenciacion): retorna el resultado de una potencia. Se escribe la base antes del asterisco
    ++ (incremento) : incrementa un valor de uno en uno
 -- (decremento) : decrementa un valor de uno en uno
*/

let valor1 = 55;
let valor2 = 17;

console.log("suma: ", valor1 + valor2);
console.log("resta ", valor1 - valor2);
console.log("Multiplicacion ", 55 * 27);
console.log("Division: ", valor1 / valor2);
console.log("Residuo: ", valor1 % valor2)
console.log("Exponente: ", valor1 ** valor2);
console.log("Incremento: ", ++ valor1);
console.log("Decremento: ", --valor2);