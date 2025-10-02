    
    export class Personnage {

        id : number;
        prenom : string;
        nom : string;
        surnom : string;
        particule : string;
        sexe : string;
        age : number;
        prime : number;
        groupe : string;

        likes!: number;
        imageUrl?: number;

        constructor(
        id : number,
        prenom : string,
        nom : string,
        surnom : string,
        particule : string,
        sexe : string,
        age : number,
        prime : number,
        groupe : string,) {
            this.id =id;
            this.prenom = prenom;
            this.nom = nom;
            this.surnom = surnom;
            this.particule = particule;
            this.sexe = sexe;
            this.age = age;
            this.prime = prime;
            this.groupe = groupe;
        }

    addLike(): void {
    this.likes++;
  }

  removeLike(): void {
    this.likes--;
  }

  setImage(imageUrl: string): void {
    this.imageUrl = this.imageUrl;
  }


    }
    

