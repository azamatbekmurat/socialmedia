import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UsersService {
  users: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers(){
    return this.users;
  }

  getUserById(userId: string){
    return this.database.object('users/' + userId);
  }

  getFriendsOfThisUser(user: User){
    var output;
    for (var key in user.friends){
      output.push(this.getUserById(key));
    }
    return output;

  }

}
