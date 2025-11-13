import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPerso } from 'src/app/services/api-persos';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-liste-personnages',
  templateUrl: './list-personnages-api.component.html',
  styleUrls: ['./list-personnages-api.component.scss']
})
export class ListPersonnagesApiComponent implements OnInit {

  personnage!: PersonnageAPI;
  persoList!: PersonnageAPI[];
  likeButtonText = 'Ajouter un like !';
  isLoading = true; 
  triAscendantAge = true; 

  constructor(private listePersoService: ApiPerso, 
    private router: Router,
    private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.listePersoService.getPersos().subscribe({

      next: (persoList: PersonnageAPI[]) => {
        this.persoList = persoList
        console.log(this.persoList)
        this.isLoading = false;
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('complete'),
    })
  }

  onViewFichePerso(personnage: PersonnageAPI) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

onTrierParAge() {
  this.persoList.sort((a,b) => {
    const nbC = a.age ?? 0;
    const nbD = b.age ?? 0;
    return this.triAscendantAge ? nbC - nbD : nbD - nbC;
  });
  this.triAscendantAge = !this.triAscendantAge;
  this.cdr.detectChanges(); 
}

}