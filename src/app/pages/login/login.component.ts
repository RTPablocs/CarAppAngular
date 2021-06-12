import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  });

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  getLogin(): void {
    const email = this.loginData.value.email;
    const password = this.loginData.value.password;
    this.auth.getLogin(email, password);
  }
}
