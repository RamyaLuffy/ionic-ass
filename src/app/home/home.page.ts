import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCartService } from '../services/add-cart/add-cart.service';
import { LoginService } from '../services/login.service';
import { ProductListService } from '../services/product-list/product-list.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public product: any = [];
  products: any[] = [];
  cartItemCount: number = 0;

  constructor(private login:LoginService,private navCtrl: NavController,private productservice:ProductListService,private addtocart:AddCartService,  private router : Router) { }

  ngOnInit() {
   this. getproductDetail()
   this.updateCartItemCount()
  }


  getproductDetail(){
    this.productservice.getProduct().subscribe((data)=>{
      console.log(data);
      this.product = data;
      
    })
  }
  viewProductDetails(productId: number) {
    this.navCtrl.navigateForward(`/product-detail/${productId}`);
  }

  
  addToCart(products:any) {
    console.log('Product added to cart:', this.product);
    this.addtocart.addToCart(products);
    this.updateCartItemCount();
  }
   updateCartItemCount() {
    this.cartItemCount = this.addtocart.getCartItemCount();

  }

  logout() {
    this.login.logout();
      this.router.navigate(['./']) 
  }
}
