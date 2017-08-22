let nombre:string     = "Vicente Spencer";
let apellido:string   = "Noriega Moreno";
function edad() {
  let edad:number     = 2017 - 1991;
  return edad;
}

// let texto = "Hola, " + nombre + " " + apellido + ", (" + edad + " años)";
// let texto = `Hola, ${ nombre } ${ apellido }, (${ edad } años)`;
let texto = `Nombre ${ nombre } ${ apellido }
Edad: ${ edad() } años`;
console.log( "***************************************************" );
console.log( texto );
console.log( "***************************************************\n" );
