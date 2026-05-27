import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  getProduct(){
    return [
      {
        id:1,
        productName:'tv'
      },
      {
        id:2,
        productName:'keyboard'
      },
      {
        id:3,
        productName:'laptop'
      }
    ]
  }
}
