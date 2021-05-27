import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCustomerComponent } from './header-customer/header-customer.component';



@NgModule({
    declarations: [HeaderCustomerComponent],
    exports: [
        HeaderCustomerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeaderCustomerModule { }
