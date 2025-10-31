import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ApiPerso } from 'src/app/services/api-persos';
import { ListeGroupeService } from 'src/app/services/liste-groupe-service';

@Component({
  selector: 'app-fiche-personnage-api',
  standalone: true,
  imports: [],
  templateUrl: './fiche-personnage-api.component.html',
  styleUrl: './fiche-personnage-api.component.scss'
})
export class FichePersonnageApiComponent {

  personnage!: PersonnageAPI

  constructor(
    private apiPersonnagesService: ApiPerso,
    private listeGroupeService: ListeGroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPersonnage();
  }

private getPersonnage() {
  const persoId = this.route.snapshot.params['id'];

  this.apiPersonnagesService.getPersonnageById(persoId)
    .subscribe({
      next: (p: PersonnageAPI) => {
        this.personnage = p; 
        console.log(this.personnage);
      },
      error: (err) => console.error('Erreur récupération personnage:', err)
    });
}

    onViewFicheGroupe(nom: String) {
    const groupe = this.listeGroupeService.getGroupeByName(nom)
    const idNum = Number(groupe.id);
    this.router.navigateByUrl(`groupe/${idNum}`);
  }


}
