
// Uso de Let y Const
// let nombre = "Ricardo Tapia"; // error
//const edad = 23; // error
/* declaración de las variables con let y indicar el tipo de dato explicito */
let nombre:string = "Ricardo Tapia";
let edad:number = 23;

// let PERSONAJE = { // error
/* declaración del objeto constante y parametros explicitos */
const PERSONAJE: { nombre:string, edad:number } = {
  nombre: nombre,
  edad: edad
};

// Cree una interfaz que sirva para validar el siguiente objeto
interface DCComics {
  nombre:string,
  artesMarciales:string[]
};
var batman:DCComics = {
  nombre: "Bruno Díaz",
  artesMarciales: [ "Karate", "Aikido", "Wing Chun", "Jiu-Jitsu" ]
};

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}
let resultadoDobleF = ( a:number, b:number ) => ( ( a + b ) * 2 );
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string = "arco" ){
  var mensaje:string;
  if( poder ){
    //  mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
     mensaje = `${ nombre } tiene el poder de: ${ poder } y un arma: ${ arma }`;
  }else{
    //  mensaje = nombre + " tiene un " + poder
     mensaje = `${ nombre } tiene un ${ poder }`;
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
  base:number;
  altura:number;
  calcularArea( base:number, altura:number ):number {
    return base * altura;
  }
}
