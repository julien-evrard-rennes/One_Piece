import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groupe } from 'src/app/models/groupe';
import { GroupeAPI } from 'src/app/models/groupeApi';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ApiGroupe } from 'src/app/services/api-groupes';
import { ListeGroupeService } from 'src/app/services/liste-groupe-service';

@Component({
  selector: 'app-list-groupes-api',
  standalone: true,
  imports: [],
  templateUrl: './list-groupes-api.component.html',
  styleUrl: './list-groupes-api.component.scss'
})
export class ListGroupesApiComponent implements OnInit {

    groupe! : GroupeAPI;
    groupeList! : GroupeAPI[];
    groupeMock! : Groupe;
    groupeMockList! : Groupe[];
    persoList: PersonnageAPI[] =[];
    nbMembres: { [id: number]: number } = {};
    triAscendant = true; 
    triAscendantNumber = true; 

    
      constructor(
        private apiGroupeService: ApiGroupe, 
        private router: Router,
        private listeGroupeService: ListeGroupeService
      ) {}
    
  ngOnInit(): void {
    this.groupeMockList = this.listeGroupeService.getGroupeList();
    this.apiGroupeService.getGroupes().subscribe({
      next: (groupeList: GroupeAPI[]) => {
        this.groupeList = groupeList;
        groupeList.forEach(groupe => {
          const mock = this.groupeMockList.find(g => g.id === groupe.id);
          this.apiGroupeService.getNombreMembres(groupe.id).subscribe({
            next: (count) => {
              //this.nbMembres[groupe.id] = count 
              this.nbMembres[groupe.id] = mock?.nbmembres ?? count;
            },
            error: (err) => console.error('Erreur récupération nombre membres :', err)
          });
        });
      },
      error: (err) => console.log('Erreur récupération groupes :', err),
      complete: () => console.log('complete')
    });
  }

  onViewFicheGroupe(groupe: GroupeAPI) {
    this.router.navigateByUrl(`groupe/${groupe.id}`);
  }

//

    onTrierParNumber() {
    this.groupeList.sort((a,b) => {
      const nbC = parseInt(a.number) ?? 0;
      const nbD = parseInt(b.number) ?? 0;
      return this.triAscendantNumber ? nbC - nbD : nbD - nbC;
    });
    this.triAscendantNumber = !this.triAscendantNumber; 
  }

  onTrierParMembresReels() {
    this.groupeList.sort((a, b) => {
      const nbA = this.nbMembres[a.id] ?? 0;
      const nbB = this.nbMembres[b.id] ?? 0;
      return this.triAscendant ? nbA - nbB : nbB - nbA;
    });
    this.triAscendant = !this.triAscendant; // on inverse le sens du tri à chaque clic
  }
}


