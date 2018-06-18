import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FriendsService {
  users: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
      this.users = database.list('users');
  }

  getAccounts(){
    return this.users;
  }

}
