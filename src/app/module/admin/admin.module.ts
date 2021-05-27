import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    BrowserModule,
    FormsModule,
    FooterAdminModule,
    HeaderAdminModule,

    CategoryAdminModule,

    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ManagerAdminModule
  ]
})
export class AdminModule { }
