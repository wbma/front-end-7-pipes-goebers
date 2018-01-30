import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MediaService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  loginUrl = '/login';


  username: string;
  password: string;

  accessToken: string;

  public register() {

  }

  public login() {
    console.log('username: ' + this.username);
    console.log('pass: ' + this.password);

    const body = {
      username: this.username,
      password: this.password
    };

    this.http.post(this.apiUrl + this.loginUrl, body).subscribe( data => {
      console.log(data);
      this.accessToken = data['token'];

      localStorage.token = this.accessToken;

      console.log('local storage: ' + localStorage.token);

    })
  }

}
