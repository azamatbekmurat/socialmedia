import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FriendsService {
  friends: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
      this.friends = database.list('connections');
      // console.log(this.friends);
  }

  getFriendsOfThisUser(userId: string) {
    let output: string[] = [];
    this.friends.subscribe(data => {
      data.forEach(connection => {
          console.log(connection);
          if (connection.user1key == userId) {
            output.push(connection.user2key);
          } else if (connection.user2key == userId) {
            output.push(connection.user1key);
          }
      });
  });
  setTimeout(function(){console.log(output);}, 300);
  console.log(output);
  return output;
  }

}
