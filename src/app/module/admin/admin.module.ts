import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterAdminModule} from './footer-admin/footer-admin.module';
import {HeaderAdminModule} from './header-admin/header-admin.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {ManagerAdminModule} from './manager-admin/manager-admin.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManagerAdminModule,
    FooterAdminModule,
    HeaderAdminModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
