import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
//Router para Redireccionar 
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent{

//Recibir el heroe desde afuera por funciones y decoradores
  @Input() heroe:any={};
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;
  
  //Inyectamos el router en el contructor de tipo router
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    //console.log ( this.index )
    //Funcion del boton para navegar
   this.router.navigate( ['/heroe',this.index] ); 
   //this.heroeSeleccionado.emit( this.index );
}

}
