import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  showHeader!: boolean;
  showUserMenu = false;
  constructor(private router: Router, private auth: AuthService) {}

  logoutUser() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  onLoginButtonClick() {
    this.router.navigate(['/login']);
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  tabs = [
    {
      name: 'Home',
      link: '/home',
    },
  ];
}
