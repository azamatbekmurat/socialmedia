import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class FriendsService {
  users: FirebaseListObservable<any[]>;


  constructor(private database: AngularFirebase) {
      this.users = database.list('users');
  }

  getAccounts(){
    return this.users;
  }

}
