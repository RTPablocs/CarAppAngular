import {Injectable} from '@angular/core';
import {Product} from '../interfaces/product';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'any'
})
export class CartDataService {

  cartItems: Product[] = [];
  initialPrice = new BehaviorSubject(0);
  currentPrice = this.initialPrice.asObservable();
  cartQuantity = new BehaviorSubject(0);
  currentQuantity = this.cartQuantity.asObservable();
  showArray = new BehaviorSubject<any[]>([])
  showArrayObservable = this.showArray.asObservable()

  constructor() {
  }


  addToCart(item: Product): void {
    this.cartItems.push(item);
    this.calculateTotalPrice();
    this.rectifyCart()
    this.cartQuantity.next(this.cartItems.length);
  }

  deleteFromCart(id: string): void {
    const index = this.cartItems.map((item) => {
      return item.product_uid;
    }).indexOf(id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalPrice();
      this.rectifyCart();
      this.cartQuantity.next(this.cartItems.length);
    }
  }

  rectifyCart(): void  {
    const preRect = new Set(this.cartItems.map(e => JSON.stringify(e)));
    this.showArray.next(Array.from(preRect).map(e => JSON.parse(e)))
  }

  calculateTotalPrice(): void {
    this.initialPrice.next(0);
    this.cartItems.forEach(item => {
      this.initialPrice.next(this.initialPrice.value + item.product_price);
    });
  }

  calculateQuantity(productId: string): number {
    let count = 0;
    this.cartItems.forEach(element => {
      if (element.product_uid === productId) {
        count += 1;
      }
    });
    return count;
  }
}

