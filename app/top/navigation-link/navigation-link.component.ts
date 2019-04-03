import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit {
  @Input() link;
  @Input() route;

  constructor() { }

  ngOnInit() {
    console.log(this.route);
  }

}
