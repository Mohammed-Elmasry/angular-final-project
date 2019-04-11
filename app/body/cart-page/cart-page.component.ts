import { Component, OnInit } from '@angular/core';
import { ProductTransferService } from 'src/app/services/productsServices/product-transfer.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  public products;
  constructor(private productTransfer: ProductTransferService) {

  }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem("product"));
    console.log(this.products);
  }

}
