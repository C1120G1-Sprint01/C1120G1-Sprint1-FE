import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailAdminComponent } from './post-manager/detail-admin/detail-admin.component';
import { ConfirmAdminComponent } from './post-manager/confirm-admin/confirm-admin.component';
import { ListCustomerManagerComponent } from './customer-manager/list-customer-manager/list-customer-manager.component';
import { EditCustomerManagerComponent } from './customer-manager/edit-customer-manager/edit-customer-manager.component';
import { DeleteCustomerManagerComponent } from './customer-manager/delete-customer-manager/delete-customer-manager.component';
import { AddCustomerManagerComponent } from './customer-manager/add-customer-manager/add-customer-manager.component';
import { ListBannerManagerComponent } from './banner-manager/list-banner-manager/list-banner-manager.component';
import { AddBannerManagerComponent } from './banner-manager/add-banner-manager/add-banner-manager.component';
import { DeleteBannerManagerComponent } from './banner-manager/delete-banner-manager/delete-banner-manager.component';
import { EditBannerManagerComponent } from './banner-manager/edit-banner-manager/edit-banner-manager.component';
import { DeletePostAdminComponent } from './post-manager/delete-post-admin/delete-post-admin.component';
import { WaitAdminComponent } from './post-manager/wait-admin/wait-admin.component';
import { MainAdminComponent } from './post-manager/main-admin/main-admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import { ListDetailComponent } from './post-manager/list-detail/list-detail.component';
import { ListApproveComponent } from './post-manager/list-approve/list-approve.component';
import {RouterModule} from '@angular/router';
import { ListWaitComponent } from './post-manager/list-wait/list-wait.component';
import { ConfirmWaitComponent } from './post-manager/confirm-wait/confirm-wait.component';
import { DeleteWaitComponent } from './post-manager/delete-wait/delete-wait.component';



@NgModule({
  declarations: [DetailAdminComponent, ConfirmAdminComponent, ListCustomerManagerComponent, EditCustomerManagerComponent, DeleteCustomerManagerComponent, AddCustomerManagerComponent, ListBannerManagerComponent, AddBannerManagerComponent, DeleteBannerManagerComponent, EditBannerManagerComponent, DeletePostAdminComponent, WaitAdminComponent, MainAdminComponent, ListDetailComponent, ListApproveComponent, ListWaitComponent, ConfirmWaitComponent, DeleteWaitComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ManagerAdminModule { }
