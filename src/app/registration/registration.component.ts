import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[AuthenticationService]
})
export class RegistrationComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  Signup(email, password){
    this.authService.signUpWithEmail(email,password)
  }

}
