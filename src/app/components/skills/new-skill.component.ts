import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent {
  nombreH: string = '';
  porcentajeH: number = 0;

  constructor(private sHabilidad: SkillService, private router: Router) { }

  onCreate(): void {
    const habilidad = new Skills(this.nombreH, this.porcentajeH);
    this.sHabilidad.save(habilidad).subscribe({
      next: () => {
        alert("Habilidad añadido");
        this.router.navigate(['']);
      }, error: () => {
        alert("Falló");
        this.router.navigate(['']);
      }
    }
    )
  }
}
