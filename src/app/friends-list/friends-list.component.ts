import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FriendsService } from '../friends.service';
import { UsersService } from '../users.service';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css'],
  providers: [FriendsService, UsersService]
})
export class FriendsListComponent implements OnInit {
  userId: string;
  observeFriends: any[] = [];
  friends: any[] = [];


  constructor(private route: ActivatedRoute, private friendsService: FriendsService, private usersService: UsersService) { }

  ngOnInit() {
    //console.log("Hello");
    this.route.params.forEach((urlParameters) => {
      this.userId=urlParameters['id'];
      // console.log(this);
    });

    let friend;
    var that = this;
    console.log("Hello");
    var foundFriendsKeys = this.friendsService.getFriendsOfThisUser(this.userId);
    var componentScope = this;

    setTimeout(function(){
      foundFriendsKeys.forEach(foundKey => {
        componentScope.observeFriends.push(componentScope.usersService.getUserById(foundKey));
      });
      console.log(componentScope.observeFriends);
      componentScope.observeFriends.forEach(function(friend){
        friend.subscribe(dataLastEmitted => {
          componentScope.friends.push(dataLastEmitted.username);
        })
      })
      console.log(componentScope.friends);
    }, 1000);


    // setTimeout(function(){for (var key of arr)
    //     {
    //   that.usersService.getUserById(data).subscribe(data1=>{
    //   data1.forEach(connection){
    //
    //   }
    // });
    // friend = that.usersService.getUserById(key);
    // this.friends.push(friend);
    // console.log(this.friends[0].userName);
    // };}, 300);

    // this.friendsService.getFriendsOfThisUser(this.userId).forEach(key => {
    //   console.log("Hello");
    //   friend = this.usersService.getUserById(key);
    //   this.friends.push(friend);
    //   console.log(this.friends[0]);
    // })



  }
}
