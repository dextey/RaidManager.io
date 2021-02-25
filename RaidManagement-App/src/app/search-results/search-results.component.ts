import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  canBeLoaded: boolean;
  searchTerm: string;
  charactersStartingWith: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.searchTerm = params.get('term')
    });

    this.characterService.getCharactersStartingWith(this.searchTerm)
      .subscribe(response => {
        this.charactersStartingWith = response;
        this.canBeLoaded = true;
      })
  }

}
