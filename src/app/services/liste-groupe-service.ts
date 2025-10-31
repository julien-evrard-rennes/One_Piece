import { Injectable } from "@angular/core";
import { Personnage } from "../models/Personnage";
import { Groupe } from "../models/groupe";

@Injectable({
    providedIn:'root'
})
export class ListeGroupeService {

    groupeList: Groupe[]=[
new Groupe(1,
    'l\'équipage du chapeau de paille',[
    new Personnage(1,
        'Luffy','Monkey','au chapeau de paille',
        'D',
        'H',
        19,
        3000000000,
        ['l\'équipage du chapeau de paille', 'la pire génération', 'l\'organisation des Empereurs']
        ),
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
]
),
new Groupe(2,
    'la pire génération',[
    new Personnage(1,
        'Luffy','Monkey','au chapeau de paille',
        'D',
        'H',
        19,
        3000000000,
        ['l\'équipage du chapeau de paille', 'la pire génération', 'l\'organisation des Empereurs']
        )
    ]
    )
    ];

getGroupeList(): Groupe[]{
    return [...this.groupeList];
}

getGroupeById(groupeId: number): Groupe {
    const idNum = Number(groupeId);
    const foundGroupe = this.groupeList.find(Groupe => Groupe.id === idNum );
    if (!foundGroupe){
        throw new Error('Groupe non trouvé !');
    }
    return foundGroupe;
}

getGroupeByName(nom: String): Groupe {
    const foundGroupe = this.groupeList.find(Groupe => Groupe.nom === nom );
    if (!foundGroupe){
        throw new Error('Groupe non trouvé !');
    }
    return foundGroupe;
}


}