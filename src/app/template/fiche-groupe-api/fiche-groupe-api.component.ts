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
  groupeAPI! : GroupeAPI;
  persoList: PersonnageAPI[] =[];

  constructor(
    private apiGroupeService : ApiGroupe,
    private route : ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGroupe();
  }

  private getGroupe() {
    const groupeId = this.route.snapshot.params['id'];

    this.apiGroupeService.getGroupeById(groupeId).subscribe({
      next: (g: GroupeAPI) => {
        this.groupeAPI = g;
        console.log('Groupe récupéré :', this.groupeAPI);
        this.getPersoList(this.groupeAPI);
      },
      error: (err) => console.error('Erreur récupération groupe:', err)
    });
  }
    
  onViewFichePerso(personnage: PersonnageAPI) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

  private getPersoList(groupe: GroupeAPI) {
    this.apiGroupeService.getPersoList(groupe).subscribe({
      next: (persoList) => {
        this.persoList = persoList; 
        console.log('Personnages du groupe :', this.persoList);
      },
      error: (err) => console.error('Erreur récupération personnages :', err)
    });
  }

}

