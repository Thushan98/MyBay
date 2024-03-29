import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {};

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.authService.userData) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
