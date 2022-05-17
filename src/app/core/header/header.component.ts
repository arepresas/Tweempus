import { AuthenticationService } from '../authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tweempus-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthenticationService) {}

  checkLogin() {
    return this.authService.isAuthenticated();
  }

  logOut() {
    this.authService.logout();
  }
}
