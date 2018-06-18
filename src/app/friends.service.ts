// import { Injectable } from '@angular/core';
// import { User } from './user.model';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { Connection } from './connection.model';
//
// @Injectable()
// export class FriendsService {
//   friends: FirebaseListObservable<any[]>;
//
//
//   constructor(private database: AngularFireDatabase) {
//       this.friends = database.list('friends');
//   }
//
//   getFriendsOfThisUser(userId: string){
//     let output: FirebaseListObservable<any[]>;
//     for (var friend in this.friends) {
//       if (friend.key1==userId) {
//         output.push(friend.key2);
//       } else if (friend.key2==userId) {
//         output.push(friend.key1);
//       }
//     }
//     return output;
//   }
//
// }
