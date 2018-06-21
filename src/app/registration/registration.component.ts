import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[AuthenticationService, UsersService]
})
export class RegistrationComponent implements OnInit {
  //userAccounts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  userAccount;
  token;

  constructor(private authService: AuthenticationService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.token = localStorage.fireBaseToken;
    console.log("heyyyyyyy");
    console.log(this.token);

  }

  submitForm(username: string, userLastName: string, userBirthDay: string, userGender: string) {
     var newUser: User = new User(username, userLastName, userBirthDay, userGender);
     this.usersService.addUser(newUser,localStorage.fireBaseToken);

     let that = this;

     setTimeout(function(){

       that.usersService.getLastUser().forEach(function(information) {
         information.forEach(function(data) {
           console.log(data.$key);
           that.router.navigate(['account',localStorage.fireBaseToken]);
         });
       });

     }, 1000);
   }

   signup(email, password){
     this.authService.signUpWithEmail(email,password);

  
   }

  //  Test(){
   //
  //    var newUser: User = new User("abc", "def", "abc.com", "1234", "329223", "asdfdssdfa" );
  //    this.usersService.addUser(newUser);
  //    this.userAccount = this.usersService.getLastUser();
  //    console.log("Firebase Data");
  //    console.log(this.usersService.getLastUser() );
  //    console.log("Looping through data");
  //    this.usersService.getLastUser().forEach(function(information) {
  //      information.forEach(function(data) {
  //        console.log(data.$key);
  //        //this.router.navigate(['account',data.$key]);
  //      });
  //    });
   //
  //    var that = this;
  //    setTimeout(function() {
  //      that.usersService.getLastUser().forEach(function(information) {
  //        information.forEach(function(data) {
  //          console.log(data.$key);
  //          that.router.navigate(['account',data.$key]);
  //          //this.router.navigate(['account',data.$key]);
  //        });
  //      });
   //
  //    });
  //  }

}
