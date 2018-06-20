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
  providers: [UsersService, PostsService, AuthenticationService]
})
export class AccountComponent implements OnInit {
  userId: string;
  userPosts;
  userName;
  userFriends;

  constructor(
    private route: ActivatedRoute,
    // private location: Location,
    private authenticationService: AuthenticationService,
    private postsService: PostsService,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log("hello");
    this.route.params.forEach((urlParameters) => {
      this.userId=urlParameters['id'];
    });
    this.userService.getUserById(this.userId).subscribe(dataLastEmitted => {
      console.log(dataLastEmitted.username);
      this.userName = dataLastEmitted.username;
    });
  }

  goToSearchList() {
    this.router.navigate(['account', this.userId, 'search']);
  }


}
