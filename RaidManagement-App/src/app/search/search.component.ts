import { HttpClient } from '@angular/common/http';
import { Character } from './../_models/character.model';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  characterNameRealm: string;
  searchedCharacter: any;
  requestCharBaseUrl = 'https://raider.io/api/v1/characters/profile';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getCharacterInfo(event: any) {
    this.characterNameRealm = event.target.value;
    let requestUrl: string;

    requestUrl = this.requestCharBaseUrl + '?region=eu' + '&realm=' +
    this.getRealmNameFromFullstring(this.characterNameRealm) + '&name=' +
    this.getCharacterNameFromFullString(this.characterNameRealm);

    this.http.get(requestUrl).subscribe(response => {
      this.searchedCharacter = response;
      console.log(this.searchedCharacter);
    }, error => {
      console.log(error);
    });

  }

  getCharacterNameFromFullString(fullCharacterString: string) {
    return fullCharacterString.split('-')[0];
  }

  getRealmNameFromFullstring(fullCharacterString: string) {
    return fullCharacterString.split('-')[1];
  }
}
