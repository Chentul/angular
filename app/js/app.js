"use strict";
/* La diferencia es el alcance de las variables. let permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando y var define una variable global o local en una función sin importar el ámbito del bloque. */
var message = "Hello World!";
console.log("Scrope 1: " + message);
if (true) {
    var message_1 = "Good Bye!";
    console.log("Scope 2: " + message_1);
}
/* Uso de constantes en TypeScript */
var OPCION = "Esto es una constante en TypeScript ...";
console.log("Scope 3: " + OPCION);
if (true) {
    var OPCION_1 = "Esta es la misma constante en otro bloque de TypeScript ...";
    console.log("Scope 4: " + OPCION_1);
}
