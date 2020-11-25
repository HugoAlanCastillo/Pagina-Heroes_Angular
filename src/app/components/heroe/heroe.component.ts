import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute,
    private _heroesService: HeroesService
    
    ) {

      //obtenemos los parametros de cada heroe por su id
this.activatedRoute.params.subscribe(params =>{
  console.log(params['id']);
// Cargar y regresar heroe
  this.heroe = this._heroesService.getHeroe(params['id']);
})

   }



}
