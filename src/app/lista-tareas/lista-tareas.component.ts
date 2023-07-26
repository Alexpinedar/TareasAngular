import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


@Component({
  selector: 'lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent  {

  private fileTmp:any;
  constructor(){
    
  }

  ngOnInit():void{
    console.log('Componente ListaTarea Cargado');
  }

  getFile($event:any):void{
    //console.log($event)
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }

  sendFile():void{

  }

}
