import { CharacterModel } from './../_interfaces/CharacterModel';
import { AlertifyService } from './../services/alertify.service';
import { SearchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private characterService: CharacterService
  ) {}

  ngOnInit() {}

  goToProfilePage(event: any) {
    if (!this.isSearchValid(event.target.value)) {
      this.alertify.error('Wrong input format');
      return;
    }
    const characterName = this.getCharacterNameFromFullString(event.target.value);
    const realmName = this.getRealmNameFromFullString(event.target.value);

    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/profile', characterName, realmName], {
        relativeTo: this.route,
      });
  });

  }

  getCharacterNameFromFullString(fullCharacterString: string) {
    return fullCharacterString.split('-')[0];
  }

  getRealmNameFromFullString(fullCharacterString: string) {
    return fullCharacterString.split('-')[1];
  }

  isSearchValid(searchInput: string) {
    return (/^[A-Za-z]*[-][A-Za-z]*$/).test(searchInput);
  }

  createAndReturnCharacterModel(name: string, realm: string): CharacterModel {
    return {
          Name: name,
          Realm: realm,
          Region: 'EU'
    };
  }

}
