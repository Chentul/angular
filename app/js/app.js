"use strict";
/*=== Tipos de datos en TypeScript
==============================================================================*/
console.log("\n");
st();
var cadenaTexto = "Vicente Spencer Noriega Moreno";
console.log("Tipo de dato STRING");
console.log(cadenaTexto);
bk();
st();
var numero = 123.25;
console.log("Tipo de dato NUMBER");
console.log(numero);
bk();
st();
var boleano = true;
console.log("Tipo de dato BOOLEAN");
console.log(boleano);
bk();
st();
var fecha = new Date();
fecha = new Date("2020-10-21");
console.log("Objeto de tipo DATE");
console.log(fecha);
bk();
st();
var any;
console.log("Tipo de dato ANY");
any = cadenaTexto;
console.log(any);
any = numero;
console.log(any);
any = boleano;
console.log(any);
any = fecha;
console.log(any);
bk();
st();
var spiderman = {
    nombre: "Peter Parker",
    edad: 26
};
console.log("Tipo de dato Objeto");
console.log(spiderman.nombre);
console.log(spiderman.edad);
bk();
/*=== Funciones
==============================================================================*/
function bk() {
    var char = "*", count = 1;
    while (count <= 50) {
        char += "*";
        count++;
    }
    console.log(char);
    console.log("\n");
}
function st() {
    var char = "*", count = 1;
    while (count <= 50) {
        char += "*";
        count++;
    }
    console.log(char);
}
