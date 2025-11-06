import { Personnage } from "./Personnage";

export class Groupe {

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