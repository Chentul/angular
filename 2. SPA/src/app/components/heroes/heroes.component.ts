import { Component, OnInit } from '@angular/core';
/* importamos la interface Heroe para poder visualizar todas las propiedades
y métodos */
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  /* Al pasar el servicio del _heroesService Angular se encarga de disparar
  el constructor del servicio */
  constructor( private _heroesService:HeroesService, private router:Router ) {

  }

  /* ngOnInit se ejecuta cuando toda la página esta renderizada, mientras que
  el constructor se ejecuta mucho antes. */
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe( index:number ) {
    this.router.navigate( ['/heroe', index ] );
  }

}
