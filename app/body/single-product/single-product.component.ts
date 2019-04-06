import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() product:Product;
  @Output() addToCart = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  incrementCart(): void{
    this.addToCart.emit();
  }

}
