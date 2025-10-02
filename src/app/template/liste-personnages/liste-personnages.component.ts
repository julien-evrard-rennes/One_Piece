import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personnage } from 'src/app/models/Personnage';


@Component({
  selector: 'app-liste-personnages',
  templateUrl: './liste-personnages.component.html',
  styleUrls: ['./liste-personnages.component.scss']
})

export class ListePersonnagesComponent {
  @Input() Personnage!: Personnage;
  likes!:number;
  likeButtonText!: string;
  userHasLiked!:boolean;

  ngOnInit(): void{
    this.likes= 52;
    this.likeButtonText = 'Ajouter un like !';
    this.userHasLiked = false;
  } 

onAddLike(): void {
    if (this.userHasLiked) {
      this.unLike();
    } else {
      this.like();
    }
  }

unLike() {
    this.likes--;
    this.likeButtonText = 'Ajouter 1 like';
    this.userHasLiked = false;
}

like() {
    this.likes++;
    this.likeButtonText = 'Enlever 1 like !';
    this.userHasLiked = true;
}


}
