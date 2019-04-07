import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductTransferService } from 'src/app/services/product-transfer.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {

  constructor(private transferProduct: ProductTransferService) { }

  ngOnInit() {
  }

  

}
