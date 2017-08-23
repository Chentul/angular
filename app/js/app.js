"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Este ejemplo no funciona correctamente debido a falta de dependencias
de NodeJS, la cual es SystemJS*/
var index_1 = require("./clases/index");
// import { Xmen } from "./clases/xmen.class";
// import { Villanos } from "./clases/villanos.class";
var wolverine = new index_1.Xmen("Logan", "Wolverine");
var lex = new index_1.Villanos("Lex Luthor", "Conquistar Small Ville");
wolverine.imprimir();
lex.imprimirPlan();
