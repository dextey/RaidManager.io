import { SearchService } from './../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  characterModel: any;

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.characterModel = this.search.getCharacterInfo('Baidoqt', 'BurningLegion');
  }

}
