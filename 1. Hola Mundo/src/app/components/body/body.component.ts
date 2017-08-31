import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
<<<<<<< HEAD
  public frase:any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  }
}
=======

  mostrar:boolean = false;
  personajes:string[] = [ "Spiderman", "Venom", "Dr. Octopus" ];

  public frase:any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  };
}// fin de la clase BodyComponent
>>>>>>> 571cab367c14cd89d607b083db5413dba83d9635
