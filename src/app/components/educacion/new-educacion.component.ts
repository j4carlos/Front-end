import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreEdu: string = '';
  descripcionEdu: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.sEducacion.save(educacion).subscribe({
      next: () => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, error: () => {
        alert("Falló");
        this.router.navigate(['']);
      }
    }
    )
  }
}
