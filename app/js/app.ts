/* La diferencia es el alcance de las variables. let permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando y var define una variable global o local en una función sin importar el ámbito del bloque. */
let message = "Hello World!";
console.log( "Scrope 1: " + message );

if( true ) {
  let message = "Good Bye!";
  console.log( "Scope 2: " + message );
}

/* Uso de constantes en TypeScript */
const OPCION = "Esto es una constante en TypeScript ...";
console.log( "Scope 3: " + OPCION );

if( true ) {
  const OPCION = "Esta es la misma constante en otro bloque de TypeScript ...";
  console.log( "Scope 4: " + OPCION );
}
