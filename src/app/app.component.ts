import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {CartDataService} from './services/cart-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CarAppFrontend';

  constructor(private auth: AuthService, private cart: CartDataService) {
  }

  ngOnInit(): void {
    this.auth.loggedIn.next(this.auth.isLogged())
    if (localStorage.getItem('cartItems') !== null && localStorage.getItem('cartItemsShow') !== null){
      this.cart.cartItems = JSON.parse(localStorage.cartItems)
      this.cart.showArray.next(JSON.parse(localStorage.cartItemsShow))
      this.cart.cartQuantity.next(this.cart.cartItems.length)
    }
  }
}
