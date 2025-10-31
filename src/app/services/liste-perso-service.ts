import { Component, Injectable } from '@angular/core';
import { Personnage } from 'src/app/models/Personnage';
import { LikeType } from '../models/like-type.type';
import { Groupe } from '../models/groupe';

@Injectable({
  providedIn: 'root'
})
export class ListePersoService {

  groupe! : Groupe;

    persoList: Personnage[] = [
new Personnage(1,
    'Luffy','Monkey','au chapeau de paille',
    'D',
    'H',
    19,
    3000000000,
    ['l\'équipage du chapeau de paille', 'la pire génération', 'l\'organisation des Empereurs']
    ).withImage('https://thispersondoesnotexist.com/'),
    new Personnage(2,
    'Nami','','la voleuse',
    '',
    'F',
    20,
    366000000,
    ['l\'équipage du chapeau de paille']
    ),
    new Personnage(3,
    'Chopper','Toni Toni','le renne au nez bleu',
    '',
    'H',
    17,
    100,
    ['l\'équipage du chapeau de paille']
    )
  ];
  
  getPersoList(): Personnage[] {
    return [...this.persoList];
  }

  getPersonnageById(persoId: number): Personnage {
    const idNum = Number(persoId);
    const foundPerso = this.persoList.find(Personnage => Personnage.id === idNum);
    if (!foundPerso) {
      throw new Error('Personnage non trouvé !');
    }
    return foundPerso;
  }

  LikeById(persoId: number, likeType: LikeType): void {
    const personnage = this.getPersonnageById(persoId);
    personnage.like(likeType);
  }


}  

  