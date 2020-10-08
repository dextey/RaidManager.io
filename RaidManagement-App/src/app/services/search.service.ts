import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  requestCharBaseUrl = 'https://raider.io/api/v1/characters/profile';
  public requestedCharacter: any;

  constructor(private http: HttpClient) {}

  getCharacterInfo(characterName: string, realmName: string) {
    let requestUrl: string;

    requestUrl = `${this.requestCharBaseUrl}?region=eu&realm=${realmName}&name=${characterName}`;
    return this.http.get(requestUrl);
  }
}
