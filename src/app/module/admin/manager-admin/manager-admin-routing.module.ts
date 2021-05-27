import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCustomerManagerComponent} from "./customer-manager/list-customer-manager/list-customer-manager.component";
import {EditCustomerManagerComponent} from "./customer-manager/edit-customer-manager/edit-customer-manager.component";
const managerAdminRoutes: Routes = [

];
@NgModule({
  imports: [
    RouterModule.forChild(managerAdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManagerAdminRoutingModule { }
