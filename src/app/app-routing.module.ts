import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerModule} from './module/customer/customer.module';
import {AdminModule} from './module/admin/admin.module';
import {LoginComponent} from "./module/security/login/login.component";
import {RegisterCustomerComponent} from "./module/customer/manager-customer/register-customer/register-customer.component";
import {ListCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/list-customer-manager/list-customer-manager.component";
import {EditCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/edit-customer-manager/edit-customer-manager.component";
import {DeleteCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/delete-customer-manager/delete-customer-manager.component";
import {AdminChatComponent} from "./module/admin/admin-chat/admin-chat/admin-chat.component";


const routes: Routes = [
  {path: 'admin/chat', component: AdminChatComponent},
  {  path : 'user/create' ,component : RegisterCustomerComponent},
  {path: 'admin', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin/listUser', component: ListCustomerManagerComponent},
  {path: 'admin/listUser/edit/:id', component: EditCustomerManagerComponent},
  {path:'admin/listUser/delete', component: DeleteCustomerManagerComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomerModule, AdminModule, RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
