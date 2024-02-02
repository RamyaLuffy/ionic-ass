import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AddCartService } from '../services/add-cart/add-cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.page.html',
  styleUrls: ['./add-to-cart.page.scss'],
})
export class AddToCartPage implements OnInit {
  cartItems: any[];
  product: any; 
  quantity: number = 1;
  products: any[] = [];
  cartItemCount: number = 0;
  constructor(   private addtocart:AddCartService,  private router : Router) { }

  ngOnInit() {
    this.ionViewWillEnter()
    this.updateCartItemCount()
    this.incrementQuantity()
    this.decrementQuantity()
  
  }

  ionViewWillEnter() {
    this.cartItems = this.addtocart.getCartItems();
  }

  navigateToDetails() {
    this.router.navigate(['/home']);
  }
  updateCartItemCount() {
    this.cartItemCount = this.addtocart.getCartItemCount();
  
  }

  addToCart(products:any) {
    for (let i = 0; i < this.quantity; i++) {
    console.log('Product added to cart:', this.product);
    this.addtocart.addToCart(products);
    }
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
