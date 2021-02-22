import { HttpClient } from '@angular/common/http';
import { SearchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { CharacterModel } from './../_interfaces/CharacterModel';
import { BlankCharacter } from '../_models/BlankCharacter';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  character: any;
  canBeLoaded: boolean;
  characterName: string;
  realmName: string;
  blankChar: BlankCharacter;
  constructor(
    private search: SearchService,
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private alertify: AlertifyService
    ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.characterName = params.get('name');
      this.realmName = params.get('realm');
    });

    this.blankChar = {
      Name: this.characterName,
      Realm: this.realmName,
      Region: 'EU'
    }

    this.canBeLoaded = false;

    this.search.getCharacterInfo(this.characterName, this.realmName).subscribe(response => {
      this.character = response;
      this.canBeLoaded = true;

      this.blankChar.Name = this.character.name;
      this.blankChar.Realm = this.character.realm;
      this.blankChar.Region = this.character.region;

      this.addBlankCharacterToDb();
    });
  }

  addBlankCharacterToDb() {
    this.characterService.addCharacter(this.blankChar)
      .subscribe( ()=>{
          this.alertify.success('Character added');
      }, error => {
        this.alertify.error('Character not added');
      });

    }

}
