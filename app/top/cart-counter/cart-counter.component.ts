import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductTransferService } from 'src/app/services/product-transfer.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  public subscription = Subscription;
  public products = {};
  public numProducts: number = 0;

  constructor(private transferProduct: ProductTransferService) {
    this.transferProduct.getProduct().subscribe((product) => {
      if (product) {
        if (this.products[product["Name"]] === undefined) { //not undefined
          console.log("this is first time, add to products");
          console.log(product["Name"]);
          this.products[product["Name"]] = 1;
          // console.log("Hello: ",this.products[product["Name"]]);
        } else {
          this.products[product["Name"]]++;
        }
        this.numProducts = this.count(this.products);
      } else {
        console.log("no products received");
      }
      // console.log(Object.keys(this.products));
      // console.log(this.products[product["package"]]);
      // console.log(this.numProducts);
      console.log(product);
    });

  }

  ngOnInit() {
  }

  count(obj) {
    let countArray = Object.values(obj);
    let arrsum = arr => arr.reduce((a, b) => a + b, 0);
    return arrsum(countArray);
  }

  removeProduct(product) {
    if (this.products[product.key] > 1) {
      this.products[product.key]--;
    } else {
      delete this.products[product.key];
    }

    this.numProducts = this.count(this.products);
  }

}