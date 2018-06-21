import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Connection } from './connection.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ConnectionService {
  connections: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase,public afAuth: AuthenticationService) {
    this.connections = database.list('connections/');
  }

  addConnection(newConnection: Connection) {
    this.connections.push(newConnection);
  }
}
