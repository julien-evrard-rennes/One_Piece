import { Personnage } from "./Personnage";

export class Groupe {
        getGroupeList(): Groupe[] {
          throw new Error('Method not implemented.');
        }

        id : number;
        nom! : String;
        capitaine! : Personnage;
        membresListe! : Personnage[];
        nbmembres!: number;

        constructor(
        id : number,
        nom : String,
        nbmembres :number) {
            this.id = id;
            this.nom = nom;
            //this.id = crypto.randomUUID().substring(0, 8);
            this.nbmembres = nbmembres;
        }
    }