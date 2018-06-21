import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FriendsService } from '../friends.service';
import { UsersService } from '../users.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-friend-account',
  templateUrl: './friend-account.component.html',
  styleUrls: ['./friend-account.component.css'],
  providers: [FriendsService, UsersService]
})
export class FriendAccountComponent implements OnInit {
  userId: string;
  friendName: string;
  observeFriends: any[] = [];
  friends: any[] = [];

  constructor(private route: ActivatedRoute, private friendsService: FriendsService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId=urlParameters['id'];
      this.friendName=urlParameters['friend'];
    });
  }

}
