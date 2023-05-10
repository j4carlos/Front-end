import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {
  educ: Educacion = null;

  constructor(private sEducacion: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe({
      next: (data) =>{
        this.educ = data;
      }, error: () =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educ).subscribe({
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
