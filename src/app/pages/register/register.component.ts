import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null)
  });
  name!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  generateSubstring(): void {
    const base = this.registerData.value.username;
    this.name = base.substring(0, 2);
  }
}
