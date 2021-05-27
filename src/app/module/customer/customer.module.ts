import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatCustomerModule} from './chat-customer/chat-customer.module';
import { PostCustomerModule } from './post-customer/post-customer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    ChatCustomerModule,
    PostCustomerModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
