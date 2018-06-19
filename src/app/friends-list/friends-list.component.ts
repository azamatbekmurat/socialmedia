import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css'],
  providers: [FriendsService, UsersService]
})
export class FriendsListComponent implements OnInit {
  userId: string;
  friends: object[];


  constructor(public friendsService: FriendsService, public usersService: UsersService) { }

  ngOnInit() {
    let friend;
    this.friendsService.getFriendsOfThisUser(this.userId).forEach(key => {
      friend = this.usersService.getUserById(key);
      this.friends.push(friend);
    })
    }



}
