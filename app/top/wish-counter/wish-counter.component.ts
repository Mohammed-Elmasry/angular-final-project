import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Product2WishlistService } from 'src/app/services/product2-wishlist.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-wish-counter',
  templateUrl: './wish-counter.component.html',
  styleUrls: ['./wish-counter.component.scss']
})
export class WishCounterComponent implements OnInit {
  private productList: Product[] = [];
  private numProducts = 0;

  constructor(private product2wishlist: Product2WishlistService) {
    this.product2wishlist.getProduct().subscribe((product) => {
      if (product) {
        if (this.productList.indexOf(product) === -1) { //product not in wishlist
          this.productList.push(product);
          this.numProducts = this.productList.length;
        } else { //product already added
          alert("product is already within the wishlist");
        }
      } else {
        console.log("no products received");
      }
    });
  }

  ngOnInit() {
  }

}
