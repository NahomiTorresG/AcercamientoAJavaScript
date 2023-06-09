
/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/


//Arreglos (objeto)
var casaArreglo = [3, 2, 1, 4, "Verde", 6, "Rojo"];
//casa[3(indice)];//Normalmente se hace con un arreglo



//Creacion de un objeto casa (atributos)

const casa = {
    numHabitaciones: 3,
    numPisos: 2,
    numBanios: 1,
    color: "Rojo",
};




//Para imprimir la informacion de un objeto, se utiliza la referencia al objeto, despues un punto, y por ultimo el nombre de la propiedad o metodo que quiero mostrar
console.log("El color de mi casa es: ", casa.color);



//Instruccion: Crear 50 casas, con la misma estructura pero con colores diferentes

//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa informacion se va a ir personalizando.

class casaPlantilla {
    //1.- Definir mis propiedades como variables para posteriormente agregarle valores (este valor se lo vamos a dar cuando instanciemos el objeto)

    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";


    //3.- Definir una funcion constructora. Esta funcion es una funcion especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlas como parametros de construccion y así poder instanciar nuestro objeto.

    //Los parametros se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable correspondiente
    constructor(numHabitaciones, numBanios, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;
    }



    //2.- Definimos los métodos como funciones, porque estas funciones nos dicen qué es lo que puede hacer mi objeto

    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentanas(){
        console.log("Swiiiiift, ventanas abiertas");
    }

    guardarmeDelFresnito(){
        console.log("Qué agusticidad");
    }
}

//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;). Pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.)


/*Instanciar objetos

Par instanciar objetos usamos la siguiente sintaxis

variable nombre = palabra reservadaNew referenciaDeLaClase (parametros de construccion);

Let objeto = new ClaseObjeto (parametros);

*/

//Tengo una variable llamada casaDeFelipe que es un nuevo objeto de la clase "casaPlantilla" y que tiene los siguientes paramtros
let casaDeFelipe = new casaPlantilla (3, 2, 1, "Rojo");

console.log(casaDeFelipe);
casaDeFelipe.guardarmeDelFresnito();
casaDeFelipe.encenderLuces();
console.log(casaDeFelipe.numHabitaciones);


let casaDeGustavo = new casaPlantilla (3, 2, 1, "Rojo");
let casaDeMiguel = new casaPlantilla (3, 2, 1, "Rojo");
let casaDeAle = new casaPlantilla (3, 2, 1, "Rojo");
let casaDeNahomi = new casaPlantilla (3, 2, 1, "Rojo");



//Ejemplo de POO con gatitos

class gatitos {
    //1.- Propiedades
    nombre = "";
    edad = 0;
    tamanio = 0;
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;


    //3.- Constructor
    constructor (nombre, edad, tamanio, caracter, numeroVidas, color, raza, vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;

    }


    //2.- Métodos
    imprimirInfo(){
    console.log("El nombre de mi gato es: ", this.nombre)
    console.log("La edad de mi gato es: ", this.edad)
    console.log("El tamaño de mi gato es: ", this.tamanio)
    console.log("El caracter de mi gato es: ", this.caracter)
    console.log("El numero de vidas de mi gato es; ", this.numeroVidas)
    console.log("La raza de mi gato es: ", this.raza)

    };

    maullar(){
    console.log("Miauuu");
    };

    raguniar(){
    console.log("El gato ha rasguniado el sillón");
    };

    ronronear(){
        console.log("Purrr");
    };

    cuidarGato(){
        if(this.numeroVidas<3){
            console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }

}


//Instanciar
let juanchoDelCampo = new gatitos ("Juancho Del Campo", 5, "Grande", "Tranquilo", 7, "naranja", "angora", true);
let nenito = new gatitos ("Nenito", 3, "Mediano", "Travieso", 2, "Blanco con naranja", "desconocida", true);
let gordis = new gatitos ("Gorda", 8, "mediana", "floja", 7, "tri color", "barrio xd", true);

juanchoDelCampo.imprimirInfo();
juanchoDelCampo.cuidarGato();
nenito.imprimirInfo();
nenito.cuidarGato();
gordis.imprimirInfo();
gordis.cuidarGato();



/*

JSON (JavaScript Object Notation)

Es un formato estándar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, })


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

//Objeto normal de JAVASCRIPT

objeto = {
    nombre: "Felipe",
    edad: 15,
}
console.log (objeto);

console.log("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


//Como muestra nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

/*la sintaxis para pasar de objeto normal de JS a JSON es:

JSON.stringify(objeto que quiero serializar)
*/


console.log(JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para deserializar un objeto JSON, vamos a utilizar un método llamado JSON.parse (objeto que queremos deserializar)

let objetoDeserializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado);