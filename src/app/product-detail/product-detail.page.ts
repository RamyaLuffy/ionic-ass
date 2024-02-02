import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list/product-list.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AddCartService } from '../services/add-cart/add-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  productId: number;
  product: any; 


  constructor(private productservice:ProductListService,private navCtrl: NavController,private activatedRoute: ActivatedRoute, private addtocart:AddCartService, ) {
    this.productId = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.ionViewDidEnter
   
  }
  ionViewDidEnter() {
    // Fetch detailed product information when the view enters
    this.productservice.getProductDetails (this.productId).subscribe((data: any) => {
      this.product = data;
    });
 
}
addToCart(products:any) {
  // Implement your logic to add the product to the cart
  
  console.log('Product added to cart:', this.product);
  this.addtocart.addToCart(products);
}

}
