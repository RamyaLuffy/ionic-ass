import { Component, OnInit } from '@angular/core';
import { AddCartService } from '../services/add-cart/add-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItems: any[];

  constructor(private addtocart:AddCartService,  private router : Router) { }

  ngOnInit() {
  
  }

 


  


}
