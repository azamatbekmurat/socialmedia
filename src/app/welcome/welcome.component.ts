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
    console.log("hello");
    this.authService.loginWithEmail(email, password);
    
  }
}
