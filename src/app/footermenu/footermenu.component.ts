import { Component, OnInit } from '@angular/core';
import { GenericmenuComponent } from '../genericmenu/genericmenu.component';

@Component({
  selector: 'app-footermenu',
  templateUrl: '../genericmenu/genericmenu.component.html',
  styleUrls: ['./footermenu.component.css']
})
export class FootermenuComponent extends GenericmenuComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    this.setNavigationList([{ name: 'Copyright@2021', clicked: false }]);
  }
}
