import { Component, OnInit } from '@angular/core';
import { Personnage } from 'src/app/models/Personnage';
import { ListePersoService } from '../../services/liste-perso-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-personnages',
  templateUrl: './liste-personnages.component.html',
  styleUrls: ['./liste-personnages.component.scss']
})
export class ListePersonnagesComponent implements OnInit {

  personnage!: Personnage;
  persoList!: Personnage[];
  likeButtonText = 'Ajouter un like !';

  constructor(private listePersoService: ListePersoService, 
    private router: Router) {}

  ngOnInit(): void {
    this.persoList = this.listePersoService.getPersoList();
  }

  onViewFichePerso(personnage: Personnage) {
    this.router.navigateByUrl(`personnage/${personnage.id}`);
  }

  onAddLike(personnage: Personnage): void {
    if (!personnage) {
      console.error('personnage undefined !');
      return;
    }

    if (personnage.userHasLiked) {
      this.unLike(personnage);
    } else {
      this.like(personnage);
    }
  }

  like(personnage: Personnage) {
    this.listePersoService.LikeById(personnage.id, 'unlike');
    personnage.userHasLiked = true;
    personnage.likeButtonText = 'Enlever un like !';
  }

  unLike(personnage: Personnage) {
    this.listePersoService.LikeById(personnage.id, 'like');
    personnage.userHasLiked = false;
    personnage.likeButtonText = 'Ajouter un like !';
  }
}