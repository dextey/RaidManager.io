import { HttpClient } from '@angular/common/http';
import { Character } from './../_models/character.model';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchInput: string;
  searchedCharacter: any;
  requestCharBaseUrl = 'https://raider.io/api/v1/characters/profile';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  getCharacterInfo(event: any) {
    this.searchInput = event.target.value;
    let requestUrl: string;
    let characterName: string;
    let realmName: string;

    characterName = this.getCharacterNameFromFullString(this.searchInput);
    realmName = this.getRealmNameFromFullstring(this.searchInput);

    requestUrl =
      this.requestCharBaseUrl +
      '?region=eu' +
      '&realm=' +
      realmName +
      '&name=' +
      characterName;

    this.http.get(requestUrl).subscribe(
      (response) => {
        this.searchedCharacter = response;
        console.log(this.searchedCharacter);
      },
      (error) => {
        console.log(error);
      }
    );

    this.router.navigate(['/profile', characterName], {
      relativeTo: this.route,
    });
  }

  getCharacterNameFromFullString(fullCharacterString: string) {
    return fullCharacterString.split('-')[0];
  }

  getRealmNameFromFullstring(fullCharacterString: string) {
    return fullCharacterString.split('-')[1];
  }
}
