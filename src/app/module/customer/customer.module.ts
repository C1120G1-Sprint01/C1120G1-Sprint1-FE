import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ManagerCustomerModule} from "./manager-customer/manager-customer.module";

@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    ManagerCustomerModule
  ],
  exports: [ChatBoxComponent]
})
export class CustomerModule { }
