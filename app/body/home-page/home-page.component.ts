import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductInjectorService } from '../../services/product-injector.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public products;

  constructor(private productInjector: ProductInjectorService) {
    this.productInjector.getProducts().subscribe((data) => {
      this.products = (data);
    });
  }

  ngOnInit() {
  }
}
