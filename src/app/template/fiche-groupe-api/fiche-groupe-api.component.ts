import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeAPI } from 'src/app/models/groupeApi';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ApiGroupe } from 'src/app/services/api-groupes';

@Component({
  selector: 'app-fiche-groupe-api',
  standalone: true,
  imports: [],
  templateUrl: './fiche-groupe-api.component.html',
  styleUrl: './fiche-groupe-api.component.scss'
})
export class FicheGroupeApiComponent implements OnInit {

  personnage!: PersonnageAPI;
  groupe! : GroupeAPI;

  constructor(
    private apiGroupeService : ApiGroupe,
    private route : ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this. getGroupe();
  }

  private getGroupe() {
    const groupeId = this.route.snapshot.params['id'];
    this.apiGroupeService.getGroupeById(groupeId)
    .subscribe({
      next: (g: GroupeAPI) =>{
        this.groupe = g;
        console.log(this.groupe);
      },
      error: (err) => console.error('Erreur récupération personnage:', err)
    });
}
    
  onViewFichePerso(personnage: PersonnageAPI) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

}
