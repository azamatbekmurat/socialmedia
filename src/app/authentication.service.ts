import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router, RouterModule } from '@angular/router';
@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  authState: any = null;
  token;


  constructor(public afAuth: AngularFireAuth, public routes:Router) {
    this.user = afAuth.authState;
    
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    localStorage.setItem('fireBaseToken', null );
    this.afAuth.auth.signOut();
    this.routes.navigate(['']);
  }
  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.loginWithEmail(email,password);
        localStorage.setItem('fireBaseToken', this.authState.uid);
        console.log("hello");
        location.reload();
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
        console.log(this.authState);
        localStorage.setItem('fireBaseToken', this.authState.uid);
        this.routes.navigate(["account",this.authState.uid])
        console.log(this.authState.uid);
        
      })
      .catch(error => {
        console.log(error);
        throw error
      });
  }
}