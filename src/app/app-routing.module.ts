import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterCustomerComponent} from "./module/customer/manager-customer/register-customer/register-customer.component";


const routes: Routes = [{
  path : 'user/create' ,component : RegisterCustomerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
