import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  baseUrl = "https://eu.battle.net/oauth/token?grant_type=client_credentials";
  region: string;
  authData = 'Basic' + btoa(environment.CLIENTID + ':' + environment.CLIENTSECRET);
  oauthHttpOptions = {
    headers: new HttpHeaders( {
      'Content-Type' : 'application/json',
      'Authorization' : this.authData
    })
  }

  constructor(private http: HttpClient) {
  }

  acquireAccessToken(model: any) {
    return this.http.post(this.baseUrl, null, this.oauthHttpOptions)
  }
}
