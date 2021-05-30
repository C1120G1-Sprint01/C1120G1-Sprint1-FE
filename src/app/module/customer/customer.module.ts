import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ManagerCustomerModule} from "./manager-customer/manager-customer.module";
import { PostCustomerModule } from './post-customer/post-customer.module';
import { HttpClientModule } from '@angular/common/http';
import {HeaderCustomerModule} from "./header-customer/header-customer.module";
import {EmojiModule} from "@ctrl/ngx-emoji-mart/ngx-emoji";
import {PickerModule} from "@ctrl/ngx-emoji-mart";

@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    PostCustomerModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ManagerCustomerModule,
    HeaderCustomerModule,
    EmojiModule,
    PickerModule,
  ],
  exports: [ChatBoxComponent]
})
export class CustomerModule { }
