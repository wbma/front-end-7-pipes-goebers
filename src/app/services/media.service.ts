import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'util';

@Injectable()
export class MediaService {

  constructor(private http: HttpClient, private router: Router) { }

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  loginUrl = '/login';
  registerUrl = '/users';

  username: string;
  password: string;
  fullName: string;
  email: string;

  accessToken: string;

  private formValidation(): boolean {
    if (!this.username) {
      alert('Please check that all required fields have content');
      return false;
    } else if (!this.password) {
      alert('Please check that all required fields have content');
      return false;
    } else if (!this.email) {
      alert('Please check that all required fields have content');
      return false;
    } else {
      return true;
    }
  };

  public register() {
    if (this.formValidation()) {
      console.log('username: ' + this.username);
      console.log('pass: ' + this.password);
      console.log('full name: ' + this.fullName);
      console.log('email: ' + this.email);

      const body = {
        username: this.username,
        password: this.password,
        email: this.email,
        full_name: this.fullName
      };

      this.http.post(this.apiUrl + this.registerUrl, body).subscribe( data => {
        console.log(data);
        
        this.login();
      });
    }
  };

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

      this.router.navigate(['front']);
    }, (errorMsg: HttpErrorResponse) => {
      console.log(errorMsg);
    })
  };
}
