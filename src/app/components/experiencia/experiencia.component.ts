import { Component } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencia: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService){}

  isLogged = true;

  ngOnInit(): void{
    this.cargarExperiencia();
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.experiencia = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe({
        next: () => {
          this.cargarExperiencia();
        }, error: () => {
          alert("No se pudo borrar la experiencia");
        }
      })
    }
  }

}


