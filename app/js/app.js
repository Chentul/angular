"use strict";
/*===DESTRUCTURACIÓN DE LOS OBJETOS
==============================================================================*/
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
// let { nombre, clave, poder } = avenger;
// let descripcion = `Descripción: ${ clave }\nNombre: ${ nombre }\nPoder: ${ poder }`;
var supername = avenger.nombre, superheroe = avenger.clave, superpower = avenger.poder;
var descripcion = "Descripci\u00F3n: " + superheroe + "\nNombre: " + supername + "\nPoder: " + superpower;
console.log(descripcion);
/*===DESTRUCTURACIÓN DE LOS ARREGLOS
==============================================================================*/
var avengers = ["Bruce Banner", "Steve Rogers", "Tony Stark"];
var hulk = avengers[0], capitanamerica = avengers[1], ironman = avengers[2];
// let [ , , ironman  ] = avengers; // indice del arreglo
var texto2 = "Hulk: " + hulk + "\nCapitan America: " + capitanamerica + "\nIron Man: " + ironman;
console.log(texto2);
