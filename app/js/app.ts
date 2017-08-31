/* resolve = si la función se resuelve con exito,
   reject = si la función es rechazada */
let prom1 = new Promise( function( resolve, reject ) {
  setTimeout( ()=> {
    console.log( "Promesa terminada ..." );
    resolve(); // si la promesa termina con exito
    // reject(); // si la promesa es rechazada
  }, 500 );
});

prom1.then( function() {
  console.log( "Ejecutarme cuando la promesa termine correctamente! =)" );
},          function() {
  console.error( "Ejecutarme cuando la promesa termine rechazada! x(" );
});
