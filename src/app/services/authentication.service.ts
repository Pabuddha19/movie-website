import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}

  login(username: string, password: string) {
    if (username === 'prabuddha' && password === 'lamichhane') {
      return 200;
    } else {
      return 403;
    }
  }
  logout() {
    this.router.navigate(['login']);
  }
}
