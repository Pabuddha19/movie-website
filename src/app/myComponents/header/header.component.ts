import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private auth: AuthenticationService) {}

  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
  }
  ngOnInit(): void {}
}
