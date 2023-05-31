console.log("---->Ejercicio - Carreritas<----")

/*En una carrera se tienen los siguientes corredores con su respectiva posición:
- Primer lugar: Roberto
- Segundo lugar: Andrea
- Tercer lugar: Jorge
- Cuarto lugar: Ramiro
- Quinto lugar: Sofía
Después de 3 vueltas, Jorge adelanta a Roberto, Ramiro adelanta a Jorge y Roberto se lesiona y sale de la carrera. Además, Andrea baja una posición, Ramiro
mantiene su lugar y el quinto lugar es reemplazado por José.
¿Cómo quedan las posiciones después de esas 3 vueltas?
*/

var carreritas = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];


//Después de 3 vueltas, Jorge adelanta a Roberto
carreritas.unshift("Jorge");
carreritas.splice(3,1)
console.log(carreritas);

//Ramiro adelanta a Jorge:
carreritas.unshift("Ramiro");
carreritas.splice(4,1)
console.log(carreritas);

//Roberto sale de la carrera:
carreritas.splice(2,1);
console.log(carreritas);

//Andrea baja una posición:
carreritas[2] = "Sofía"; 
carreritas[3] = "Andrea";
console.log(carreritas);

//El quinto lugar queda reemplazado por José:
carreritas.push("José");
console.log(carreritas);
