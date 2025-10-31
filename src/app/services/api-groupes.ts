import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { map } from 'rxjs/internal/operators/map';
import { GroupeAPI } from '../models/groupeApi';

@Injectable({
  providedIn: 'root'
})
export class ApiGroupe {
  private readonly http: HttpClient = inject(HttpClient);

  getGroupes() {
    return this.http.get<GroupeAPI[]>(environment.API_GROUPE_OP);
  }

getGroupeById(groupeId: number) {
  return this.getGroupes().pipe(
    map(groupeList => {
      const found = groupeList.find(p => p.id === Number(groupeId));
      if (!found) throw new Error('Groupe non trouvé !');
      return found;
    })
  );
}

}