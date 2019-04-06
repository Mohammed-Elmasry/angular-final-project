import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  //building products array
  public cart: number = 0;
  public products: Product[][] = [[{
    "ProductId": "HT-1000",
    "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
    "Name": "Notebook Basic 15",
    "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
    "Price": 956
  },
  {
    "ProductId": "HT-1067",
    "Description": "Ergonomic mouse pad with ITelO Logo",
    "Name": "Ergo Mousepad",
    "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1067.jpg",
    "Price": 8.99
  },
  {
    "ProductId": "HT-1052",
    "Description": "4800 dpi x 1200 dpi - up to 35 ppm (mono) / up to 34 ppm (color) - capacity: 250 sheets - Hi-Speed USB2.0, Ethernet",
    "Name": "Ultra Jet Super Highspeed",
    "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1052.jpg",
    "Price": 170
  }], [
    {
      "ProductId": "HT-1102",
      "Description": "Complete package, 1 User, Network Software Utilities, Useful Applications and Documentation",
      "Name": "Smart Network",
      "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1102.jpg",
      "Price": 69
    },
    {
      "ProductId": "HT-1137",
      "Description": "Optimum Hi-Resolution max. 2048 × 1536 @ 85Hz, Dot Pitch: 0.24mm",
      "Name": "Flat XXL",
      "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1137.jpg",
      "Price": 1430
    },
    {
      "ProductId": "HT-1210",
      "Description": "PC Power Station with 3,4 Ghz quad-core, 32 GB DDR3 SDRAM, feels like Available PC, Windows 8 Pro",
      "Name": "PC Power Station",
      "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1210.jpg",
      "Price": 2399
    }], [
    {
      "ProductId": "HT-2025",
      "Description": "Organizer and protective case for 264 CDs and DVDs",
      "Name": "CD/DVD case: 264 sleeves",
      "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-2025.jpg",
      "Price": 44.99
    },
    {
      "ProductId": "HT-9992",
      "Description": "7 inch 1280x800 HD display (216 ppi), Quad-core processor, 16 GB internal storage (actual formatted capacity will be less), 4325 mAh battery (Up to 8 hours of active use), white or black",
      "Name": "Smartphone Alpha",
      "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-9992.jpg",
      "Price": 599
    },
    {
      "ProductId": "HT-1255",
      "Description": "Optimum Hi-Resolution Widescreen max. 2048 x 1080 @ 85Hz, Dot Pitch: 0.27mm, HDMI, Discontinued-Sub",
      "Name": "Broad Screen 22HD",
      "img": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1255.jpg",
      "Price": 270
    }]];
  constructor() { }

  ngOnInit() {
  }

  increaseCart(){
    this.cart++;
    console.log(this.cart);
  }
}
