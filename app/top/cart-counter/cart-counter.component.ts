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
  public products = [];
  public num: number = 0;

  constructor(private transferProduct: ProductTransferService) {
    this.transferProduct.getProduct().subscribe((product) => {
      if (product) {
        this.products.push(product);
        // console.log("received product: ", product);
        console.log(this.products);
        this.num = this.products.length;
      } else {
        console.log("no products received");
      }
    });
  }

  ngOnInit() {
  }



}
