import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CartDataService} from '../../services/cart-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, public cart: CartDataService) {
  }

  isLogged = false;
  cartQuantity = 0;

  ngOnInit(): void {
    this.cart.currentQuantity.subscribe(value => this.cartQuantity = value);
    this.auth.loggedObservable.subscribe(value => this.isLogged = value);
  }

  executeLogout(): void {
    this.auth.loggedIn.next(false);
    this.auth.getLogout();
  }
}


