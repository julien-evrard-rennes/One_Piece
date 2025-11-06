import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupeAPI } from 'src/app/models/groupeApi';
import { PersonnageAPI } from 'src/app/models/PersonnageApi';
import { ApiGroupe } from 'src/app/services/api-groupes';

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
    persoList: PersonnageAPI[] =[];
    nbMembres: { [id: number]: number } = {}; 

    
      constructor(private apiGroupeService: ApiGroupe, 
        private router: Router
      ) {}
    
  ngOnInit(): void {
    this.apiGroupeService.getGroupes().subscribe({
      next: (groupeList: GroupeAPI[]) => {
        this.groupeList = groupeList;
        groupeList.forEach(groupe => {
          this.apiGroupeService.getNombreMembres(groupe.id).subscribe({
            next: (count) => this.nbMembres[groupe.id] = count
          });
        });
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('complete')
    })
  }

  onViewFicheGroupe(groupe: GroupeAPI) {
    this.router.navigateByUrl(`groupe/${groupe.id}`);
  }



}
