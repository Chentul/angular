"use strict";
var nombre = "Vicente Spencer";
var apellido = "Noriega Moreno";
function edad() {
    var edad = 2017 - 1991;
    return edad;
}
// let texto = "Hola, " + nombre + " " + apellido + ", (" + edad + " años)";
// let texto = `Hola, ${ nombre } ${ apellido }, (${ edad } años)`;
var texto = "Nombre " + nombre + " " + apellido + "\nEdad: " + edad() + " a\u00F1os";
console.log("***************************************************");
console.log(texto);
console.log("***************************************************\n");
