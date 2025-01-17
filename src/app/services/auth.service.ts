import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../interfaces/user';
import * as firebase from 'firebase/app';
//import AuthProvider = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afa: AngularFireAuth) { }

  login(user: User) {
    return this.afa.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password);
  }

  getAuth() {
    return this.afa;
  }
}
