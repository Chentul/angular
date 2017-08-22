/*=== Tipos de datos en TypeScript
==============================================================================*/
console.log( "\n" );
st();
let cadenaTexto:string = "Vicente Spencer Noriega Moreno";
console.log( "Tipo de dato STRING" );
console.log( cadenaTexto );
bk();

st();
let numero:number = 123.25;
console.log( "Tipo de dato NUMBER" );
console.log( numero );
bk();

st();
let boleano:boolean = true;
console.log( "Tipo de dato BOOLEAN" );
console.log( boleano );
bk();

st();
let fecha:Date = new Date();
fecha = new Date( "2020-10-21" );
console.log( "Objeto de tipo DATE" );
console.log( fecha );
bk();

st();
let any:any;
console.log( "Tipo de dato ANY" );
any = cadenaTexto; console.log( any );
any = numero; console.log( any );
any = boleano; console.log( any );
any = fecha; console.log( any );
bk();

st();
let spiderman = {
  nombre: "Peter Parker",
  edad: 26
};
console.log( "Tipo de dato Objeto" );
console.log( spiderman.nombre );
console.log( spiderman.edad );
bk();
/*=== Funciones
==============================================================================*/
function bk() {
  let char:string = "*", count:number = 1;
  while( count <= 50 ) { char += "*"; count++; }
  console.log( char ); console.log( "\n" );
}
function st() {
  let char:string = "*", count:number = 1;
  while( count <= 50 ) { char += "*"; count++; }
  console.log( char );
}
