import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatCustomerModule } from './chat-customer/chat-customer.module';
import { PostCustomerModule } from './post-customer/post-customer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManagerCustomerModule } from './manager-customer/manager-customer.module';




@NgModule({
  declarations: [],
  imports: [
    ChatCustomerModule,
    PostCustomerModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ManagerCustomerModule
  ]
})
export class CustomerModule { }
