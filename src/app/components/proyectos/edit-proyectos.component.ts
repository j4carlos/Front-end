import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent {
  proyec: Proyectos = null;

  constructor(private sProyecto: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe({
      next: (data) =>{
        this.proyec = data;
      }, error: () =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyec).subscribe({
      next:() => {
        this.router.navigate(['']);
      }, error: () =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    }
    )
  }
}
