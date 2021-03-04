import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[] = [];

  constructor(
    private httpClient: HttpClient
    ){  }

  addToCart(product: any){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.httpClient.get<{type : String, price: Number}>('/assets/shipping.json');
  }
}
