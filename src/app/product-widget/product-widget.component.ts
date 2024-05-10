import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrl: './product-widget.component.css'
})
export class ProductWidgetComponent {
@Input() products:any = []
}
