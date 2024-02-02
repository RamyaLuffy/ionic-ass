import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  Product_API="https://fakestoreapi.com/products"
 

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get( this.Product_API)
  }

  getProductDetails(productId: number) {
    return this.http.get<any>(`${this.Product_API}/${productId}`);
  }

}
