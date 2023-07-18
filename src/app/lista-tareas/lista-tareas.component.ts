import { Component } from '@angular/core';

@Component({
  selector: 'lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent  {

  edad: number;
  tareas: Array<string>;
  constructor(){
    this.edad = 18;
    this.tareas = ["alex", "juan", "kike"];
  }

  ngOnInit():void{
    console.log('Componente ListaTarea Cargado');
  }

}
