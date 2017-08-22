let miFuncion = function( a:any ) { return a; }
let miFuncionF = ( a:any ) => a;

console.log( miFuncion( "Función normal ..." ) );
console.log( miFuncionF( "Función con flecha ..." ) );
console.log( "\n" );

let miFuncion2 = function( a:number, b:number ) { return a + b; }
let miFuncion2F = ( a:number, b:number ) => a + b;

console.log( "Función normal, suma: " + miFuncion2( 3, 5 ) );
console.log( "Función flecha, suma: " + miFuncion2F( 3, 5 ) );
console.log( "\n" );

let miFuncion3 = function( nombre:string ) {
  nombre = nombre.toUpperCase();
  return nombre;
}
let miFuncion3F = ( nombre:string ) => {
  nombre = nombre.toUpperCase();
  return nombre;
}

console.log( "Función normal, nombre: " + miFuncion3( "Vicente Spencer Noriega Moreno" ) );
console.log( "Función flecha, nombre: " + miFuncion3F( "Vicente Spencer Noriega Moreno" ) );
console.log( "\n" );
/* Objetos en ECMA 6
==============================================================================*/
// let nombre = "Pedro";
let hulk = {
  nombre: "Bruce",
  estado: "Furioso",
  smash() {
    // setTimeout( function(){ console.log( this.nombre + " smash!!" ); }, 1500 );
    setTimeout( () => { console.log( this.nombre + " smash!!" ); }, 1500 );
  }
}; // fin del objeto hulk

hulk.smash();
