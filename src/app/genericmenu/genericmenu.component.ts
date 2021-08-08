import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genericmenu',
  templateUrl: './genericmenu.component.html',
  styleUrls: ['./genericmenu.component.css']
})
export class GenericmenuComponent implements OnInit {
  navigationList: Array<any>;
  styles: string;
  constructor() {}

  ngOnInit() {}

  setNavigationList(list: Array<any>) {
    this.navigationList = list;
  }
  click(item: any) {
    item.clicked = !item.clicked;
  }
}
