import { Injectable } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: boolean;
  userData: User[] = [];

  constructor(private route: Router) { }

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userData) {
      return true;
    } else {
      window.alert("You don't have permission to view this page"); (4)
      return false;
    }
  }

  logout() {
    this.token = false;
  }

  login() {
    this.token = true;
    this.route.navigate(['home']);
  }
}
