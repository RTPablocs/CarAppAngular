import {Component, OnInit} from '@angular/core';
import {CartDataService} from '../../services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(public cart: CartDataService) {
  }

  price = 0;
  data = this.cart.rectifyCart();

  ngOnInit(): void {
    this.cart.currentPrice.subscribe(
      value => this.price = value
    );
  }
  deleteCart(): void {
    this.cart.cartItems.length = 0;
    this.data.length = 0;
    this.cart.cartQuantity.next(0);
    this.cart.initialPrice.next(0);
  }
}


