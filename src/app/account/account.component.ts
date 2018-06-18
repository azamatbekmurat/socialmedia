import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
// import { FriendsService } from '../friends.service';
import { PostsService } from '../posts.service';
import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [PostsService, AuthenticationService]
})
export class AccountComponent implements OnInit {
  userId: string;
  userPosts;
  userAccount;
  userFriends;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authenticationService: AuthenticationService,
    private postsService: PostsService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId=urlParameters['id'];
    });
    this.userAccount = this.userService.getUserById(this.userId);
    this.userFriends = this.userService.getFriendsOfThisUser(this.userAccount);
  }

}
