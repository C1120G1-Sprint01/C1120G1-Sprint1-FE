import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostCustomerComponent } from './module/customer/post-customer/edit-post-customer/edit-post-customer.component';
import { ListPostCustomerComponent } from './module/customer/post-customer/list-post-customer/list-post-customer.component';


const routes: Routes = [
  {path: "customer/post-list", component: ListPostCustomerComponent},
  {path: "customer/post-edit/:id", component: EditPostCustomerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
