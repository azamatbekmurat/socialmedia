import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router, RouterModule } from '@angular/router';
@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  authState: any = null;


  constructor(public afAuth: AngularFireAuth, public routes:Router) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }
  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        console.log(this.routes);
        this.routes.navigate(["account",this.authState.uid])
        console.log(this.authState.uid);
        
      })
      .catch(error => {
        console.log(error);
        throw error
      });
  }
}