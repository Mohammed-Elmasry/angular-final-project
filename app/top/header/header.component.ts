import { Component, OnInit } from '@angular/core';
import { NavigationLinkComponent } from '../navigation-link/navigation-link.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public linkHome: string = 'Home';
  public linkCart: string = "Cart";
  public linkWish: string = "Wish";
  constructor() { }

  ngOnInit() {
  }

}
