import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers:[AuthenticationService]
})
export class WelcomeComponent implements OnInit {

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


  }

  logout() {
    this.authService.logout();
  }
  LoginWithEmail(email,password){
   console.log(email);
   console.log(password);
    this.authService.loginWithEmail(email, password);
    console.log(this.authService.user);

  }
  Signup(email, password){
    this.authService.signUpWithEmail(email,password)
  }

}
