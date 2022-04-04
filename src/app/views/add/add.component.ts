import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/model/tarea';
import { TareaService } from 'src/app/service/tarea.service';

@Component(
  {
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

}

)

export class AddComponent implements OnInit {


  constructor(private router:Router, private service:TareaService){}
  modelTarea = new Tarea();
  ngOnInit(): void {
  }


  Guardar(tarea:Tarea){

    this.service.crearTarea(tarea).subscribe(data=> {alert("Nueva Tarea Agregada data");
                                          this.router.navigate(["tarea"]);
    })
  }



}
