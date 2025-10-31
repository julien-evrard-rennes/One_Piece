import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPerso } from 'src/app/services/api-persos';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';

@Component({
  selector: 'app-liste-personnages',
  templateUrl: './list-personnages-api.component.html',
  styleUrls: ['./list-personnages-api.component.scss']
})
export class ListPersonnagesApiComponent implements OnInit {

  personnage!: PersonnageAPI;
  persoList!: PersonnageAPI[];
  likeButtonText = 'Ajouter un like !';

  constructor(private listePersoService: ApiPerso, 
    private router: Router) {}

  ngOnInit(): void {
    this.listePersoService.getPersos().subscribe({
      next: (persoList: PersonnageAPI[]) => {
        this.persoList = persoList
        console.log(this.persoList)
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('complete')
    })
  }

  onViewFichePerso(personnage: PersonnageAPI) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

}