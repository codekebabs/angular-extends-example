import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HorizontalmenuComponent } from './horizontalmenu/horizontalmenu.component';
import { GenericmenuComponent } from './genericmenu/genericmenu.component';
import { FootermenuComponent } from './footermenu/footermenu.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HorizontalmenuComponent,
    GenericmenuComponent,
    FootermenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
