console.log("*****Ejercicio 6 de Repo de alexanyernas*****")



//1. Solicitamos al usuario un numero entero entre el 1 y el 10

function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function contarNumerosPrimos() {
    let numerosIngresados = [];
    let numero = (prompt("Ingrese un número (ingrese 0 para finalizar):"));
  
    while (numero !== 0) {
      if (numero > 1) {
        numerosIngresados.push(numero);
      }
  
      numero = (prompt("Ingrese un número (ingrese 0 para finalizar):"));
    }
  
    let cantidadPrimos = 0;
    for (let i = 0; i < numerosIngresados.length; i++) {
      if (esPrimo(numerosIngresados[i])) {
        cantidadPrimos++;
      }
    }
  
    console.log("La cantidad de números primos ingresados es: " + cantidadPrimos);
  }
  
  contarNumerosPrimos();
  