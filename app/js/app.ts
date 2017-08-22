/*===DESTRUCTURACIÓN DE LOS OBJETOS
==============================================================================*/
let avenger = {
  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga"
};

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

// let { nombre, clave, poder } = avenger;
// let descripcion = `Descripción: ${ clave }\nNombre: ${ nombre }\nPoder: ${ poder }`;

let { nombre:supername, clave:superheroe, poder:superpower } = avenger;
let descripcion = `Descripción: ${ superheroe }\nNombre: ${ supername }\nPoder: ${ superpower }`;

console.log( descripcion );

/*===DESTRUCTURACIÓN DE LOS ARREGLOS
==============================================================================*/
let avengers:string[] = [ "Bruce Banner", "Steve Rogers", "Tony Stark" ];
let [ hulk, capitanamerica, ironman  ] = avengers;
// let [ , , ironman  ] = avengers; // indice del arreglo
let texto2 =
`Hulk: ${ hulk }
Capitan America: ${ capitanamerica }
Iron Man: ${ ironman }`;
console.log( texto2 );
