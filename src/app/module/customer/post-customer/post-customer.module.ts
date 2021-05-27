import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddPostCustomerComponent} from './add-post-customer/add-post-customer.component';
import {EditPostCustomerComponent} from './edit-post-customer/edit-post-customer.component';
import {DeletePostCustomerComponent} from './delete-post-customer/delete-post-customer.component';
import {ListPostCustomerComponent} from './list-post-customer/list-post-customer.component';
import {ViewPostCustomerComponent} from './view-post-customer/view-post-customer.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [AddPostCustomerComponent, EditPostCustomerComponent, DeletePostCustomerComponent, ListPostCustomerComponent,
    ViewPostCustomerComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PostCustomerModule {
}
