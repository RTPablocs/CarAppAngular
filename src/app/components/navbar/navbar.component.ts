import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  isLogged = this.auth.isLogged();

  ngOnInit(): void {
  }

  executeLogout(): void {
    this.isLogged = this.auth.isLogged();
    this.auth.getLogout();
  }
}


