import { Component } from '@angular/core';
import { ListePersonnagesComponent } from '../liste-personnages/liste-personnages.component';
import { Personnage } from '../../models/Personnage';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  title = 'One_Piece';

  ngOnInit(): void{}

}
