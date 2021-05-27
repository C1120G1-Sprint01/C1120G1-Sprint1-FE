import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatCustomerModule} from './chat-customer/chat-customer.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ManagerCustomerModule} from "./manager-customer/manager-customer.module";




@NgModule({
  declarations: [],
  imports: [
    ChatCustomerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManagerCustomerModule
  ]
})
export class CustomerModule { }
