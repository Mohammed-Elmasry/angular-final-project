import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductTransferService } from 'src/app/services/product-transfer.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private productTransfer: ProductTransferService) { }

  ngOnInit() {
  }

  
}
