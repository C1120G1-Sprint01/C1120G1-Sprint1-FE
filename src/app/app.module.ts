import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerModule} from './module/customer/customer.module';
import {HeaderCustomerModule} from './module/customer/header-customer/header-customer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    HeaderCustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
