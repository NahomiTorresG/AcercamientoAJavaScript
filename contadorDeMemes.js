//1.- Traer o referenciar todos los elementos del HTML y los vamos a guardar en variables para poder utilizarlas despues


//Metodos de seleccion
let numeroContador = document.getElementById("numeroContador");
let botonIncrementar = document.getElementById("botonIncrementar");
let botonDecrementar = document.getElementById("botonDecrementar");
let botonResetear = document.getElementById("botonResetear");
let memeRandom = document.getElementById("memeRandom");

//Declarar una variable con un estado inicial
var valorContador = 0;


//Logica de negocio
function incrementar(){
    valorContador++;
    numeroContador.innerHTML = valorContador;

    if (valorContador ===10){
        mostrarImagen();
    }
}

function decrementar(){
    valorContador--;
    numeroContador.innerHTML = valorContador;
}

function resetear(){
    valorContador = 0;
    numeroContador.innerHTML = valorContador;
}


//Funcion para mostrar la imagen

//La intencion de esta funcion es que cuando sea invocado, recorra el arreglo y tome uno de los elementos de forma aleatoria (index)
function mostrarImagen(){

    var coleccionImagenes = ["./assets/Memongos/meme1.png", "./assets/Memongos/meme2.jpg", "./assets/Memongos/meme3.png", "./assets/Memongos/meme4.png", "./assets/Memongos/meme5.png", "./assets/Memongos/meme6.png", "./assets/Memongos/meme7.png", "./assets/Memongos/meme8.png",]

    //Generar un undice aleatorio
    let indexRandom = Math.floor(Math.random()* coleccionImagenes.length)

    //Obtener la URL o direccion de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    //Agrega la URL al atributo src que dejé vacío en HTML
    memeRandom.src = urlAleatoria;
    //Cambia la propiedad de visualizacion (display) a un block
    memeRandom.style.display = "block";
}


//Eventos en los botones
botonIncrementar.addEventListener("click", incrementar);
botonDecrementar.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);