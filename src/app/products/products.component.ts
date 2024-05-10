import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  salesProduct = [
    { id: 1, name: 'TV', price: '45000' },
    { id: 2, name: 'mobile phone', price: '15000' },
    { id: 3, name: 'House Hold', price: '5000' },
    { id: 4, name: 'Electronics', price: '40000' },
  ];

  topProducts = [
    { id: 1, name: 'fashion', price: '1000' },
    { id: 2, name: 'crockery', price: '18000' },
    { id: 3, name: 'fridge', price: '25000' },
    { id: 4, name: 'electronics', price: '40000' },
  ];
}
