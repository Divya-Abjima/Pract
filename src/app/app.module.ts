import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    ClassComponent,
    StyleComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
