import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartDataService} from '../../services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
  constructor(public cart: CartDataService) {
  }

  price = 0;
  data: any[] = [];

  ngOnInit(): void {
    this.cart.currentPrice.subscribe(
      value => this.price = value
    );
    this.cart.showArrayObservable.subscribe(value => this.data = value);
  }


  deleteCart(): void {
    this.cart.cartItems.length = 0;
    this.cart.showArray.next([]);
    this.cart.cartQuantity.next(0);
    this.cart.initialPrice.next(0);
  }

  ngOnDestroy(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cart.cartItems))
    localStorage.setItem('cartItemsShow', JSON.stringify(this.data))
  }
}


