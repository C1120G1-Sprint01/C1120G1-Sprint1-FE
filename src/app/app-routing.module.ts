
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterCustomerComponent} from "./module/customer/manager-customer/register-customer/register-customer.component";



import {ListCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/list-customer-manager/list-customer-manager.component";
import {EditCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/edit-customer-manager/edit-customer-manager.component";
import {DeleteCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/delete-customer-manager/delete-customer-manager.component";
import {ChatCustomerComponent} from './module/customer/chat-customer/chat-customer/chat-customer.component';

const routes: Routes = [
  {  path : 'user/create' ,component : RegisterCustomerComponent},
  {path: 'admin', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin/listUser', component: ListCustomerManagerComponent},
  {path: 'admin/listUser/edit/:id', component: EditCustomerManagerComponent},
  {path:'admin/listUser/delete', component: DeleteCustomerManagerComponent},
  {path: '', component: ChatCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
