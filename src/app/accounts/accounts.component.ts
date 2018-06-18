import { Component, OnInit } from '@angular/core';
import { FriendsService} from '../friends.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [FriendsService]
})
export class AccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
