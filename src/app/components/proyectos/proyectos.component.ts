import { Component } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyectos[] = [];

  constructor(private sProyectos: ProyectosService){}

  isLogged = true;

  ngOnInit(): void{
    this.cargarProyectos();
  }

  cargarProyectos():void{
    this.sProyectos.lista().subscribe(data => {this.proyectos = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe({
        next: () => {
          this.cargarProyectos();
        }, error: () => {
          alert("No se pudo borrar la experiencia");
        }
      })
    }
  }
}
