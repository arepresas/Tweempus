import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
