import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostCustomerComponent } from './add-post-customer/add-post-customer.component';
import { EditPostCustomerComponent } from './edit-post-customer/edit-post-customer.component';
import { DeletePostCustomerComponent } from './delete-post-customer/delete-post-customer.component';
import { ListPostCustomerComponent } from './list-post-customer/list-post-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from './environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';




@NgModule({
  declarations: [AddPostCustomerComponent, EditPostCustomerComponent, DeletePostCustomerComponent, ListPostCustomerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ]
})
export class PostCustomerModule { }
