import { LoginComponent } from "./module/security/login/login.component";
import { ChatCustomerComponent } from './module/customer/chat-customer/chat-customer/chat-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostCustomerComponent } from './module/customer/post-customer/edit-post-customer/edit-post-customer.component';
import { ListPostCustomerComponent } from './module/customer/post-customer/list-post-customer/list-post-customer.component';
import { RegisterCustomerComponent } from "./module/customer/manager-customer/register-customer/register-customer.component";
import { ListCustomerManagerComponent } from "./module/admin/manager-admin/customer-manager/list-customer-manager/list-customer-manager.component";
import { EditCustomerManagerComponent } from "./module/admin/manager-admin/customer-manager/edit-customer-manager/edit-customer-manager.component";
import { DeleteCustomerManagerComponent } from "./module/admin/manager-admin/customer-manager/delete-customer-manager/delete-customer-manager.component";


const routes: Routes = [
  { path: 'user/create', component: RegisterCustomerComponent },
  { path: '', component: ChatCustomerComponent },
  { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin/listUser', component: ListCustomerManagerComponent },
  { path: 'admin/listUser/edit/:id', component: EditCustomerManagerComponent },
  { path: 'admin/listUser/delete', component: DeleteCustomerManagerComponent },
  {
    path: 'login', component: LoginComponent
  },
  { path: "customer/post-list", component: ListPostCustomerComponent },
  { path: "customer/post-edit/:id", component: EditPostCustomerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
