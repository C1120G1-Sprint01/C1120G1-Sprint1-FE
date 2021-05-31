
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerModule} from './module/customer/customer.module';
import {HeaderCustomerModule} from './module/customer/header-customer/header-customer.module';
import {SecurityModule} from "./module/security/security.module";

import {AdminModule} from "./module/admin/admin.module";
import {BrowserModule} from "@angular/platform-browser";
import {ServiceAdminService} from "./module/service/service-admin/service-admin.service";
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
// @ts-ignore
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    AdminModule,
    HeaderCustomerModule,
    SecurityModule
  ],
  providers: [ServiceAdminService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
