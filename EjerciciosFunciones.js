console.log("Ejercicio de velocidad")

function calcularVelocidad (distanciaKm, tiempoSeg){
    operacion = distanciaKm/tiempoSeg
    console.log(operacion)
}

console.log ("La velocidad del objeto es:")
calcularVelocidad(100,10); 
console.log("Kilómetros por segundo.")




console.log("Ejercicio 10")
function formulaGeneral(a,b,c) {
    
    

    const raiz= Math.sqrt(((Math.pow(b,2))-(4*a*c)));

    const denominador=(2*a)
    
    const x1 = (-b + raiz )/(denominador);
    const x2 = (-b - raiz )/(denominador);

    console.log("x1 es igual a " +x1 +" y x2 es igual a " + x2);
    
}

formulaGeneral(2, 15, 1);