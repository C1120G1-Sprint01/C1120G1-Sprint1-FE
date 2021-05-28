import {NgModule} from '@angular/core';
import {HeaderAdminModule} from './header-admin/header-admin.module';
import {AdminChatModule} from './admin-chat/admin-chat.module';
import {CategoryAdminModule} from './category-admin/category-admin.module';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ManagerAdminModule} from './manager-admin/manager-admin.module';
import {FooterAdminModule} from './footer-admin/footer-admin.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HeaderAdminModule,
    FooterAdminModule,
    AdminChatModule,
    HttpClientModule,
    ManagerAdminModule,
    CategoryAdminModule,
  ]
})
export class AdminModule { }
