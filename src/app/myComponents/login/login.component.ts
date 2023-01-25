import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    if (this.username.trim().length === 0) {
      this.errorMessage = 'Username is  required.';
    } else if (this.password.trim().length === 0) {
      this.errorMessage = 'Password is required.';
    } else {
      // 
      this.errorMessage = '';
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMessage = ' Invalid Credentials !';
      }
    }
  }

  ngOnInit(): void {}
}
