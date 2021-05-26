import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterAdminModule} from './footer-admin/footer-admin.module';
import {HeaderAdminModule} from './header-admin/header-admin.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterAdminModule,
    HeaderAdminModule
  ]
})
export class AdminModule { }
