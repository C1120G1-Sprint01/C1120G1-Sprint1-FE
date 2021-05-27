import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailAdminComponent} from './post-manager/detail-admin/detail-admin.component';
import {ConfirmAdminComponent} from './post-manager/confirm-admin/confirm-admin.component';
import {ListCustomerManagerComponent} from './customer-manager/list-customer-manager/list-customer-manager.component';
import {EditCustomerManagerComponent} from './customer-manager/edit-customer-manager/edit-customer-manager.component';
import {DeleteCustomerManagerComponent} from './customer-manager/delete-customer-manager/delete-customer-manager.component';
import {AddCustomerManagerComponent} from './customer-manager/add-customer-manager/add-customer-manager.component';
import {ListBannerManagerComponent} from './banner-manager/list-banner-manager/list-banner-manager.component';
import {AddBannerManagerComponent} from './banner-manager/add-banner-manager/add-banner-manager.component';
import {DeleteBannerManagerComponent} from './banner-manager/delete-banner-manager/delete-banner-manager.component';
import {EditBannerManagerComponent} from './banner-manager/edit-banner-manager/edit-banner-manager.component';
import {DeletePostAdminComponent} from './post-manager/delete-post-admin/delete-post-admin.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({

  exports: [
    AddCustomerManagerComponent
  ],
  declarations: [DetailAdminComponent, ConfirmAdminComponent,
    ListCustomerManagerComponent, EditCustomerManagerComponent,
    DeleteCustomerManagerComponent, AddCustomerManagerComponent,
    ListBannerManagerComponent, AddBannerManagerComponent,
    DeleteBannerManagerComponent, EditBannerManagerComponent,
    DeletePostAdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]

})
export class ManagerAdminModule {
}
