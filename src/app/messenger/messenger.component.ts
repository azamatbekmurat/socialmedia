import { Component } from '@angular/core';
import {FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent{
  messages: FirebaseListObservable<any[]>;
  message: String = " ";

  constructor(public database : AngularFireDatabase ) { 
    this.messages=this.database.list('message'); 
  }

  ngOnInit() {
  }

  chatSend(theirMessage: string) {
    this.messages.push({ message: theirMessage});
    this.message = '';
  }
}
