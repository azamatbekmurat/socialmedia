import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UsersService {
  users: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase,public afAuth: AuthenticationService) {
    this.users = database.list('userAccounts/');
  }

  getUsers(){
    return this.users;
  }

  getUserById(userId: string){
    return this.database.object('userAccounts/' + userId);
  }

  // DoesUserExistInDB(userEmail: string){
  //   this.users.forEach(user => {
  //     if (user.email==userEmail) {
  //       return true;
  //     }
  //   })
  //   return false;
  // }

  addNewUser(newUser: User) {

   let uid: string = this.afAuth.authState.uid;
    this.database.list('userAccounts/${uid}/').set(newUser);
    this.users.push(newUser);
  }



  //
  // getFriendsOfThisUser(user: User){
  //   var output;
  //   for (var key in user.friends){
  //     output.push(this.getUserById(key));
  //   }
  //   return output;
  //
  // }

}
