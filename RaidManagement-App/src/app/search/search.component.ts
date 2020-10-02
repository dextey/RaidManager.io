import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  characterNameRealm: string;
  requestCharBaseUrl = 'https://raider.io/api/v1/characters/profile';

  constructor() { }

  ngOnInit() {
  }

  searchForCharacter(characterNameAndRealm: string) {

  }

  onEnterClick(event: any) {
    this.characterNameRealm = event.target.value;
  }

}
