import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterAdminModule} from './footer-admin/footer-admin.module';
import {HeaderAdminModule} from './header-admin/header-admin.module';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterAdminModule,
    HeaderAdminModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
  ]
})
export class AdminModule { }
