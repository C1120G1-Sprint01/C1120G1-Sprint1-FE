import { NgModule } from '@angular/core';

import {FooterAdminModule} from './footer-admin/footer-admin.module';
import {HeaderAdminModule} from './header-admin/header-admin.module';

import {CategoryAdminModule} from './category-admin/category-admin.module';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ManagerAdminModule} from "./manager-admin/manager-admin.module";



@NgModule({
  declarations: [],
  imports: [
    FooterAdminModule,
    HeaderAdminModule,
    CategoryAdminModule,
    AppRoutingModule,
    ManagerAdminModule,
    BrowserModule
  ]
})
export class AdminModule { }
