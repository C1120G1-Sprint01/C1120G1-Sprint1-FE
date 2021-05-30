
import { LoginComponent } from "./module/security/login/login.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostCustomerComponent } from './module/customer/post-customer/edit-post-customer/edit-post-customer.component';
import { ListPostCustomerComponent } from './module/customer/post-customer/list-post-customer/list-post-customer.component';
import { RegisterCustomerComponent } from "./module/customer/manager-customer/register-customer/register-customer.component";

import {ListCategoryComponent} from './module/admin/category-admin/list-category/list-category.component';
import {CreateCategoryComponent} from './module/admin/category-admin/create-category/create-category.component';
import {EditCategoryComponent} from './module/admin/category-admin/edit-category/edit-category.component';
import {DeleteCategoryComponent} from './module/admin/category-admin/delete-category/delete-category.component';
import {CreateChildCategoryComponent} from './module/admin/category-admin/create-child-category/create-child-category.component';
import {EditChildCategoryComponent} from './module/admin/category-admin/edit-child-category/edit-child-category.component';
import {DeleteChildCategoryComponent} from './module/admin/category-admin/delete-child-category/delete-child-category.component';
import {ListCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/list-customer-manager/list-customer-manager.component";
import {EditCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/edit-customer-manager/edit-customer-manager.component";
import {DeleteCustomerManagerComponent} from "./module/admin/manager-admin/customer-manager/delete-customer-manager/delete-customer-manager.component";
import {ChatCustomerComponent} from './module/customer/chat-customer/chat-customer/chat-customer.component';
import {ListChildCategoryComponent} from "./module/admin/category-admin/list-child-category/list-child-category.component";
import {MainCategoryComponent} from "./module/admin/category-admin/main-category/main-category.component";

const routes: Routes = [
  {path: 'main-category/category', component: ListCategoryComponent},
  {path: 'main-category', component: MainCategoryComponent},
  {path: 'main-category/child-category', component: ListChildCategoryComponent},
  {path: 'main-category/category/create-category', component: CreateCategoryComponent},
  {path: 'main-category/category/edit-category/:id', component: EditCategoryComponent},
  {path: 'main-category/category/delete-category/:id', component: DeleteCategoryComponent},
  {path: 'main-category/child-category/create-child-category', component: CreateChildCategoryComponent},
  {path: 'main-category/child-category/edit-child-category/:id', component: EditChildCategoryComponent},
  {path: 'main-category/child-category/delete-child-category/:id', component: DeleteChildCategoryComponent},
  { path: 'user/create', component: RegisterCustomerComponent },
  { path: '', component: ChatCustomerComponent },
  { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin/listUser', component: ListCustomerManagerComponent },
  { path: 'admin/listUser/edit/:id', component: EditCustomerManagerComponent },
  { path: 'admin/listUser/delete', component: DeleteCustomerManagerComponent },
  {path: 'login', component: LoginComponent},
  { path: "customer/post-list", component: ListPostCustomerComponent },
  { path: "customer/post-edit/:id", component: EditPostCustomerComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
