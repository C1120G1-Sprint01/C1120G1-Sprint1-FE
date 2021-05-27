import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerModule} from './module/customer/customer.module';
import {ChartsModule} from "ng2-charts";
import {AdminModule} from "./module/admin/admin.module";
import {ManagerAdminModule} from "./module/admin/manager-admin/manager-admin.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    ChartsModule,
    AdminModule,
    ManagerAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
