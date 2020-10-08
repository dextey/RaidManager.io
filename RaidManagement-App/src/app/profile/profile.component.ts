import { HttpClient } from '@angular/common/http';
import { SearchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  character: any;
  canBeLoaded: boolean;

  characterName: string;
  realmNameTwo: string;

  constructor(private search: SearchService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.characterName = params.get('name');
      this.realmNameTwo = params.get('realm');
    });

    this.canBeLoaded = false;

    this.search.getCharacterInfo(this.characterName, this.realmNameTwo).subscribe(response => {
      this.character = response;
      this.canBeLoaded = true;

    });
  }



}
