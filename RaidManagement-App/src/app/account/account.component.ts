import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  mainChar: any;
  requestUrl: string;
  charName: string;
  realmName: string;
  region: string;
  getUrl: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMainChar();
  }

  getMainChar() {
    this.requestUrl = 'https://raider.io/api/v1/characters/profile';
    this.charName = 'Baidoqt';
    this.realmName = 'BurningLegion';
    this.region = 'eu';
    this.getUrl = `${this.requestUrl}?region=${this.region}&realm=${this.realmName}&name=${this.charName}`;
    this.http.get(this.getUrl).subscribe(response => {
      this.mainChar = response;
    }, error => {
      console.log('Get request failed');
      console.log(this.getUrl);
    });
  }

}
