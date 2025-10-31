import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePersonnagesComponent } from './template/liste-personnages/liste-personnages.component';
import { LandingPageComponent } from './template/landing-page/landing-page.component';
import { FichePersonnageComponent } from './template/fiche-personnage/fiche-personnage.component';
import { ListGroupesComponent } from './template/list-groupes/list-groupes.component';
import { FicheGroupeComponent } from './template/fiche-groupe/fiche-groupe.component';
import { ListPersonnagesApiComponent } from './template/list-personnages-api/list-personnages-api.component';
import { FichePersonnageApiComponent } from './template/fiche-personnage-api/fiche-personnage-api.component';


const routes: Routes = [
  { path: 'personnage/:id', component: FichePersonnageApiComponent },
  { path: 'groupe/:id', component: FicheGroupeComponent },
   { path: 'listePersonnages', component: ListPersonnagesApiComponent },
   { path: 'listeGroupes', component: ListGroupesComponent },
   { path: '', component: LandingPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

