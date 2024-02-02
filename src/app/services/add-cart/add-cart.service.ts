import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  private cartItemCountSubject = new Subject<number>();
  private items: any[] = [];
  private cartItems: any = [];

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }
  
  getCartItemCount(): number {
    return this.items.length;
  }
  getCartItemCountObservable() {
    return this.cartItemCountSubject.asObservable();
  }

  constructor() { }
}
