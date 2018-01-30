import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public media: MediaService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token') === null) {
      // if browser local storage doesn't have the access token
    } else {
      this.router.navigate(['front']);
    }
  }

}
