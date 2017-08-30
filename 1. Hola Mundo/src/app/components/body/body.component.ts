import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar:boolean = false;
  personajes:string[] = [ "Spiderman", "Venom", "Dr. Octopus" ];

  public frase:any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  };
}// fin de la clase BodyComponent
