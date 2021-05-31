import {LoginComponent} from "./module/security/login/login.component";

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditPostCustomerComponent} from './module/customer/post-customer/edit-post-customer/edit-post-customer.component';
import {ListPostCustomerComponent} from './module/customer/post-customer/list-post-customer/list-post-customer.component';
import {RegisterCustomerComponent} from "./module/customer/manager-customer/register-customer/register-customer.component";

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
import {HomePageComponent} from "./module/customer/home-page/home-page.component";
import {LogoutComponent} from "./module/security/logout/logout.component";
import {GetBackPasswordComponent} from "./module/security/get-back-password/get-back-password.component";
import {AddPostCustomerComponent} from "./module/customer/post-customer/add-post-customer/add-post-customer.component";

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
  {path: 'category', component: ListCategoryComponent},
  {path: 'category/create', component: CreateCategoryComponent},
  {path: 'category/edit/:id', component: EditCategoryComponent},
  {path: 'category/delete/:id', component: DeleteCategoryComponent},
  {path: 'child-category/create', component: CreateChildCategoryComponent},
  {path: 'child-category/edit/:id', component: EditChildCategoryComponent},
  {path: 'child-category/delete/:id', component: DeleteChildCategoryComponent},
  {path: 'user/create', component: RegisterCustomerComponent},
  {path: 'chat', component: ChatCustomerComponent},
  {path: 'admin', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin/listUser', component: ListCustomerManagerComponent},
  {path: 'admin/listUser/edit/:id', component: EditCustomerManagerComponent},
  {path: 'admin/listUser/delete', component: DeleteCustomerManagerComponent},
  {path: "customer/post-add", component: AddPostCustomerComponent},
  {path: "customer/post-list", component: ListPostCustomerComponent},
  {path: "customer/post-edit/:id", component: EditPostCustomerComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: "homepage", component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'login/getBackPw', component: GetBackPasswordComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
