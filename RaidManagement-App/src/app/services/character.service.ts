import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

    baseUrl = 'http://localhost:5000/api/characters/';

    constructor(private http: HttpClient) { }

    addCharacter(model: any) {
      return this.http.post(`${this.baseUrl}add`, model);
    }

}
