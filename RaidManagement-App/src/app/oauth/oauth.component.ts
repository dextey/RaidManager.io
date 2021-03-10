import { Component, OnInit } from '@angular/core';
import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

  constructor(private oauthService: OauthService ) { }

  ngOnInit(): void {
  }

}
