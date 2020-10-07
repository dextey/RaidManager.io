import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  requestCharBaseUrl = 'https://raider.io/api/v1/characters/profile';

  constructor(private http: HttpClient) {}

  getCharacterInfo(characterName: string, realmName: string) {
    let requestResponse: any;
    let requestUrl: string;

    requestUrl = `${this.requestCharBaseUrl}?region=eu&realm=${realmName}&name=${characterName}`;

    this.http.get(requestUrl).subscribe(
      (response) => {
        requestResponse = response;
      },
      (error) => {
        console.log(error);
      }
    );

    return requestResponse;
  }
}
