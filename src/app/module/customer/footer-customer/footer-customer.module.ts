import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterCustomerComponent } from './footer-customer/footer-customer.component';



@NgModule({
    declarations: [FooterCustomerComponent],
    exports: [
        FooterCustomerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FooterCustomerModule { }
