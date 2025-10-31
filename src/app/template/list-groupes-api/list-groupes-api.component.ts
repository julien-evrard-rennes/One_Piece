import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupeAPI } from 'src/app/models/groupeApi';
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

    
      constructor(private listeApiGroupeService: ApiGroupe, private router: Router) {}
    
  ngOnInit(): void {
    this.listeApiGroupeService.getGroupes().subscribe({
      next: (groupeList: GroupeAPI[]) => {
        this.groupeList = groupeList
        console.log(this.groupeList)
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('complete')
    })
  }

  onViewFicheGroupe(groupe: GroupeAPI) {
    this.router.navigateByUrl(`groupe/${groupe.id}`);
  }

}
