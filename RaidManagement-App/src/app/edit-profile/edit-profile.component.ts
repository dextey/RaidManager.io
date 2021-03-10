import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  client_id: string;

  constructor() { }

  ngOnInit() {
    this.client_id = environment.CLIENTID;
  }

  openAuthPage() {
    window.open(`https://eu.battle.net/oauth/authorize?access_type=online&response_type=code&scope=wow.profile&client_id=${this.client_id}&redirect_uri=https%3A%2F%2Flocalhost:4200/oauth`, "_blank");
  }
}
