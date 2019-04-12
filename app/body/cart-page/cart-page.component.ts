import { Component, OnInit } from '@angular/core';
import { ProductTransferService } from 'src/app/services/productsServices/product-transfer.service';
import { LoginInfoService } from 'src/app/services/users/login-info.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  public products;
  public username;
  constructor(private productTransfer: ProductTransferService,
    private loginInfoService: LoginInfoService) {

    this.loginInfoService.getUsername().subscribe((username) => {
      this.username = username;
      this.products = JSON.parse(localStorage.getItem("accounts"))[username].cart;
      console.log("try to print your cart",this.products);
    });
  }

  ngOnInit() {

  }

}
