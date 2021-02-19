import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlankCharacter } from '../_models/BlankCharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

    baseUrl = 'http://localhost:5000/api/characters/';

    constructor(private http: HttpClient) { }

    addCharacter(model: BlankCharacter) : Observable<BlankCharacter> {
      return this.http.post<BlankCharacter>(this.baseUrl + 'add', model)
    }

}
