
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerModule} from './module/customer/customer.module';
import {HeaderCustomerModule} from './module/customer/header-customer/header-customer.module';
import {SecurityModule} from "./module/security/security.module";

import {AdminModule} from "./module/admin/admin.module";
import {BrowserModule} from "@angular/platform-browser";
import {ServiceAdminService} from "./module/service/service-admin/service-admin.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,

    AdminModule,
    HeaderCustomerModule,
    SecurityModule,
    AdminModule,
  ],
  providers: [ServiceAdminService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
