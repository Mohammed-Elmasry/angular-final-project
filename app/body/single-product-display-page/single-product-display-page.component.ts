import { Component, OnInit } from '@angular/core';
import { ProductInjectorService } from 'src/app/services/productsServices/product-injector.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-single-product-display-page',
  templateUrl: './single-product-display-page.component.html',
  styleUrls: ['./single-product-display-page.component.scss']
})
export class SingleProductDisplayPageComponent implements OnInit {
  private products: Product[];
  private currentProduct: Product;
  constructor(
    private productInjector: ProductInjectorService,
    private route: ActivatedRoute
  ) {
    this.productInjector.getProducts().subscribe((data) => { 
      this.products = data;
      for(let i = 0; i < this.products.length; i++){
        if(this.products[i]["ProductId"] === this.route.snapshot.paramMap.get('id')){
          this.currentProduct = this.products[i];
          console.log("We're good");
          console.log(this.currentProduct);
        }
      }
    });
  }

  ngOnInit() {
  }

}
