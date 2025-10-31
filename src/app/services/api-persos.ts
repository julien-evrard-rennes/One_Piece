import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { PersonnageAPI } from '../models/PersonnageApi';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ApiPerso {
  private readonly http: HttpClient = inject(HttpClient);

  getPersos() {
    return this.http.get<PersonnageAPI[]>(environment.API_PERSO_OP);
  }

getPersonnageById(persoId: number) {
  return this.getPersos().pipe(
    map(persoList => {
      const found = persoList.find(p => p.id === Number(persoId));
      if (!found) throw new Error('Personnage non trouvé !');
      return found;
    })
  );
}

}