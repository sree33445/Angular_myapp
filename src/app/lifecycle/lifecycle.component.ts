import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements OnInit, OnChanges {
  show: boolean = true;
  childValue = '';
  name = '';
  price = 0;
  product = {pname:'', pprice : 0};
  constructor() {
    console.log('Parent constructor called');
  }

  ngOnInit(): void {
    console.log('Parent Init called');
  }
  toggle() {
    this.show = !this.show;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes called in parent');
  }

  updateProduct() {
    this.product.pname = this.name;
    this.product.pprice = this.price;
    console.log(this.product);
    
  }
}
