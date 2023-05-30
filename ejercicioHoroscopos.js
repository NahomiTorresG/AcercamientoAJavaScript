console.log("--->Ejercicio de Horóscopos<---")

let horoscopoHoy = prompt("Ingresa tu signo del zodiaco (inicial con mayuscula xfis");


switch(horoscopoHoy){
    //para jugar con nuestros casos, el tipo de dato debe coincidir para que se ejecute correctamente
    case "Aries":
        console.log("Hoy por fin vas a dejar de pelear con los camioneros")
        break;

    case "Tauro":
        console.log("Vas a encontrar un lugar que aún tenga la promo del día de la hamburguesa")
        break;

    case "Geminis":
        console.log("")
        break;

    case "Cancer":
        console.log("Al fin vas a dejar de llorar por tu ex")
        break;

    case "Leo":
        console.log("Todo el día van a chulear tu ofni")
        break;

    case "Virgo":
        console.log("Hoy sí se va a hacer todo como tú quieres")
            break;
    
    case "Libra":
        console.log("Van a volver tus casi algo")
            break;
    
    case "Escorpio":
        console.log("Al fin se te va a hacer con tu crush")
            break;
    
    case "Sagitario":
        console.log("Aguas con los excesos, te podrían anexar")
            break;
    
    case "Capricornio":
        console.log("Ya deja de pelear con la de las tortillas o le va a hacer algo a tu masita")
            break;

    case "Acuario":
        console.log("Ten cuidado porque te lo están sonsacando")
            break;
            
    case "Piscis":
        console.log("Hoy (probablemente) no vas a llorar")
            break;
default: 
    console.log("Ingresa un signo válido")
}