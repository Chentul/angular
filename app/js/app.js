"use strict";
var miFuncion = function (a) { return a; };
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Función normal ..."));
console.log(miFuncionF("Función con flecha ..."));
console.log("\n");
var miFuncion2 = function (a, b) { return a + b; };
var miFuncion2F = function (a, b) { return a + b; };
console.log("Función normal, suma: " + miFuncion2(3, 5));
console.log("Función flecha, suma: " + miFuncion2F(3, 5));
console.log("\n");
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log("Función normal, nombre: " + miFuncion3("Vicente Spencer Noriega Moreno"));
console.log("Función flecha, nombre: " + miFuncion3F("Vicente Spencer Noriega Moreno"));
console.log("\n");
/* Objetos en ECMA 6
==============================================================================*/
// let nombre = "Pedro";
var hulk = {
    nombre: "Bruce",
    estado: "Furioso",
    smash: function () {
        var _this = this;
        // setTimeout( function(){ console.log( this.nombre + " smash!!" ); }, 1500 );
        setTimeout(function () { console.log(_this.nombre + " smash!!"); }, 1500);
    }
}; // fin del objeto hulk
hulk.smash();
