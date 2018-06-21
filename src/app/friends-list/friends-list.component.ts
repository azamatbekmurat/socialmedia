import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FriendsService } from '../friends.service';
import { UsersService } from '../users.service';
import 'rxjs/add/operator/toPromise';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css'],
  providers: [FriendsService, UsersService, AuthenticationService]
})
export class FriendsListComponent implements OnInit {
  userId: string;
  observeFriends: any[] = [];
  friends: any[] = [];
  friendKey: string;
  currentRoute: string = this.router.url;


  constructor(private route: ActivatedRoute, private friendsService: FriendsService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.userId=urlParameters['id'];
      });
    
    let friend;
    var that = this;
    var foundFriendsKeys = this.friendsService.getFriendsOfThisUser(this.userId);
    console.log(foundFriendsKeys);
    var componentScope = this;

    setTimeout(function(){
      foundFriendsKeys.forEach(foundKey => {
        componentScope.observeFriends.push(componentScope.usersService.getUserById(foundKey));
      });
      console.log(componentScope.observeFriends);
      componentScope.observeFriends.forEach(function(friend){
        friend.subscribe(dataLastEmitted => {
          componentScope.friends.push({name: dataLastEmitted.username, key: dataLastEmitted.$key});
        })
      })
      console.log(componentScope.friends);
    }, 1000);

  }

  goToFriendAccount(friend: string) {
    this.router.navigate(['account', this.userId, friend]);
  }
}
