import { Component, OnInit } from '@angular/core';
import { Connection } from '../connection.model';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { UsersService } from '../users.service';
import { ConnectionService } from '../connection.service';
import { User } from '../user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers:[AuthenticationService, UsersService, ConnectionService]
})
export class SearchResultComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  userId;


  constructor(
    private usersService: UsersService,
    private connectionService: ConnectionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    })
  }

  addFriend(userKey: string) {
    console.log("add friend called");
    let connection = new Connection(this.userId, userKey);
    this.connectionService.addConnection(connection);
    this.router.navigate(['account', this.userId]);
  }

}
