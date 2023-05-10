import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacion: Educacion[] = [];

  constructor(private sEducacion: EducacionService){}

  isLogged = true;

  ngOnInit(): void{
    this.cargarEducacion();
  }

  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data => {this.educacion = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe({
        next: () => {
          this.cargarEducacion();
        }, error: () => {
          alert("No se pudo borrar la experiencia");
        }
      })
    }
  }

}
