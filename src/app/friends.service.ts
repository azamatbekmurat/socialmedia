import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FriendsService {
  friends: FirebaseListObservable<any[]>;
  output: string[] = [];


  constructor(private database: AngularFireDatabase) {
      this.friends = database.list('connections');
      // console.log(this.friends);
  }

  getFriendsOfThisUser(userId: string) {
    
    this.friends.subscribe(data => {
      data.forEach(connection => {
          console.log("hello");
          if (connection.user1key === userId) {
            console.log(connection.user1key);
            console.log(userId);
            this.output.push(connection.user2key);
          } else if (connection.user2key === userId) {
            console.log(connection.user2key);
            console.log(userId);
            this.output.push(connection.user1key);
          } else{
            console.log("connection not found");
            console.log(connection.user1key);
            console.log(connection.user2key);
            console.log(userId);
          }
      });
    });
  var that=this;
  setTimeout(function(){console.log(that.output);}, 300);
  console.log(this.output);
  return this.output;
  }

}
