import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCustomerComponent } from './header-customer/header-customer.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderCustomerComponent],
  exports: [
    HeaderCustomerComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class HeaderCustomerModule { }
