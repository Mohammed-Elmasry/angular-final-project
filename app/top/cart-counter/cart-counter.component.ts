import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductTransferService } from 'src/app/services/product-transfer.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  public subscription = Subscription;
  public products = {};
  public num: number = 0;

  constructor(private transferProduct: ProductTransferService) {
    this.transferProduct.getProduct().subscribe((product) => {
      if (product) {
        if(this.products[product] === undefined){ //not undefined
          this.products[product] = 1;
        } else {
          this.products[product]++;
        }
        this.num = this.count(this.products);
      } else {
        console.log("no products received");
      }
    });
  }

  ngOnInit() {
  }

  count(obj){
    let count = Object.values(obj);
    let arrsum = arr => arr.reduce((a, b) => a + b, 0);
    return arrsum(count);
  }



}
