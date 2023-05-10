import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreExp, this.descripcionExp);
    this.sExperiencia.save(experiencia).subscribe({
      next: () => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, error: () => {
        alert("Falló");
        this.router.navigate(['']);
      }
    }
    )
  }
}
