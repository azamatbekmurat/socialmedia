import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService]
})
export class LoginComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  ngOnInit() {
  }
  constructor(private router: Router, public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
    this.router.navigate(['account', this.user.$key]);
  }

  logout() {
    this.authService.logout();
  }
  LoginWithEmail(email,password){
    this.authService.loginWithEmail(email, password);
  }
}
