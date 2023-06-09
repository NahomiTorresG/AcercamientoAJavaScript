console.log("**Mini Sistema Contable**");

/*
Necesito calcular sueldo
Imprimir la info de mi empleado

requerimientos
40 min
5 instancias (#empleados)


sueldo por día $156.78
calcular sueldo x15, x30 (brutos y netos)
ISR (descuento) 31%
7 días, 8hrs por día
parámetros (nombre, edad, RFC, #díasTrabajados, sueldo por día)

METODOS
mes
bruto
neto

quincena
bruto
neto
*/


//Calcular sueldo
//1.- Propiedades
class empleado{
    nombre = "";
    edad = 0;
    RFC = "";
    diasTrabajados = 7;
    sueldoPordia = 156.78;
    ISR = 505.74


//3.-Constructor
constructor (nombre, edad, RFC, diasTrabajados, sueldoPordia, quincenalBruto, mensualBruto, ISR){
    this.nombre = nombre;
    this.edad = edad;
    this.RFC = RFC;
    this.diasTrabajados = diasTrabajados;
    this.sueldoPordia = sueldoPordia;
    this.quincenalBruto = quincenalBruto;
    this.mensualBruto = mensualBruto
    this.ISR = ISR;
}




//2.- Métodos
imprimirInfo(){
console.log("Nombre: ", this.nombre);
console.log("Edad: ", this.edad);
console.log("RFC: ", this.RFC);
console.log("Días trabajados: ", this.diasTrabajados);

};

quincenalNeto(){
    console.log("Quincena neto: ", this.sueldoPordia*15 - this.ISR)
}

quincenaBruto(){
    console.log("Quincena bruto: ", this.sueldoPordia*15)
}


mensualNeto(){
    console.log("Mes neto: ", this.sueldoPordia*30 - this.ISR)
}

mesBruto(){
    console.log("Mes bruto: ", this.sueldoPordia*30)
}


}


//Instanciar
let Nahomi = new empleado("Nahomi", 24, "TOGS980719T15", 7, 156.78, 2351.7, 4703.4, 505.74);



Nahomi.imprimirInfo();
Nahomi.quincenalNeto();
Nahomi.quincenaBruto();
Nahomi.mensualNeto();
Nahomi.mesBruto();



let Pepito = new empleado("Pepito", 25, "**********", 15);

Pepito.imprimirInfo();
Pepito.quincenalNeto();
Pepito.quincenaBruto();
Pepito.mensualNeto();
Pepito.mesBruto();