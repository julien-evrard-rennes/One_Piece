import { Personnage } from "./Personnage";

export class Groupe {

        id : number;
        nom : string;
        capitaine! : Personnage;
        membresListe : Personnage[];

        constructor(
        id : number,
        nom : string,
        membresListe : Personnage[],) {
            this.id = id;
            //this.id = crypto.randomUUID().substring(0, 8);
            this.nom = nom;
            this.membresListe = membresListe;
            console.log(this);
        }
    }