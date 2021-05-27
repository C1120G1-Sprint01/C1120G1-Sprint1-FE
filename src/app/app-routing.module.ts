
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDeletePostAdminComponent} from "./module/admin/manager-admin/post-manager/list-delete-post-admin/list-delete-post-admin.component";
import {DeletePostAdminComponent} from "./module/admin/manager-admin/post-manager/delete-post-admin/delete-post-admin.component";
import {ChatCustomerComponent} from './module/customer/chat-customer/chat-customer/chat-customer.component';

const routes: Routes = [
  {path: '', component: ChatCustomerComponent},
  {path: "admin/list",component: ListDeletePostAdminComponent},
  {path: "admin/delete",component: DeletePostAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
