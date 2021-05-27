import {NgModule} from '@angular/core';
import {FooterAdminModule} from './footer-admin/footer-admin.module';
import {HeaderAdminModule} from './header-admin/header-admin.module';
import {AdminChatModule} from './admin-chat/admin-chat.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
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
    AdminChatModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ManagerAdminModule
  ]
})
export class AdminModule { }
