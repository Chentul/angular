/*Este ejemplo no funciona correctamente debido a falta de dependencias
de NodeJS, la cual es SystemJS*/
import { Xmen, Villanos } from "./clases/index";
// import { Xmen } from "./clases/xmen.class";
// import { Villanos } from "./clases/villanos.class";

let wolverine = new Xmen( "Logan", "Wolverine" );
let lex = new Villanos( "Lex Luthor", "Conquistar Small Ville" );

wolverine.imprimir();
lex.imprimirPlan();
