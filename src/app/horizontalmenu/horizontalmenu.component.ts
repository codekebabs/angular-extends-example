import { Component, OnInit } from '@angular/core';
import { GenericmenuComponent } from '../genericmenu/genericmenu.component';

@Component({
  selector: 'app-horizontalmenu',
  templateUrl: '../genericmenu/genericmenu.component.html',
  styleUrls: ['./horizontalmenu.component.css']
})
export class HorizontalmenuComponent extends GenericmenuComponent
  implements OnInit, GenericmenuComponent {
  constructor() {
    super();
  }
  navigationList: any[];

  ngOnInit() {
    this.setNavigationList([
      { name: 'Home', clicked: false },
      { name: 'About Us', clicked: false },
      { name: 'Contact Us', clicked: false }
    ]);
  }
}
