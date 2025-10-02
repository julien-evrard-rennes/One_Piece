import { Component } from '@angular/core';
import { ListePersonnagesComponent } from '../liste-personnages/liste-personnages.component';
import { Personnage } from '../../models/Personnage';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  luffy!: Personnage;
  nami!: Personnage;
  chopper! : Personnage;
  title = 'One_Piece';

  ngOnInit(): void{
    this.luffy = new Personnage(1,
    'Luffy','Monkey','au chapeau de paille',
    'D',
    'H',
    19,
    3000000000,
    'mugiwara'
    );
    this.luffy.setImage('Luffy.png');
    this.nami = new Personnage(1,
    'Nami','','la voleuse',
    '',
    'F',
    20,
    366000000,
    'mugiwara'
    );
    this.chopper = new Personnage(1,
    'Chopper','Toni Toni','le rennes au nez bleu',
    '',
    'H',
    17,
    100,
    'mugiwara'
    );
  }

}
