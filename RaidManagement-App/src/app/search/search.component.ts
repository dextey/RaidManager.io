import { SearchService } from './../services/search.service';
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private search: SearchService
  ) {}

  ngOnInit() {}

  goToProfilePage(event: any) {
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

  
}
