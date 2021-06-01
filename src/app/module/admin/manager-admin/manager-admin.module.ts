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
import {EditBannerManagerComponent} from './banner-manager/edit-banner-manager/edit-banner-manager.component';
import {DeletePostAdminComponent} from './post-manager/delete-post-admin/delete-post-admin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../../environments/environment';
import { LoadingComponent } from './banner-manager/loading/loading.component';
import { DisplayBannerTopComponent } from './banner-manager/display-banner-top/display-banner-top.component';
import { DisplayBannerBotComponent } from './banner-manager/display-banner-bot/display-banner-bot.component';
import { DisplayBannerLeftComponent } from './banner-manager/display-banner-left/display-banner-left.component';
import { DisplayBannerRightComponent } from './banner-manager/display-banner-right/display-banner-right.component';
import { HomeTestComponent } from './banner-manager/home-test/home-test.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [DetailAdminComponent, ConfirmAdminComponent, ListCustomerManagerComponent, EditCustomerManagerComponent, DeleteCustomerManagerComponent, AddCustomerManagerComponent, ListBannerManagerComponent, AddBannerManagerComponent, EditBannerManagerComponent, DeletePostAdminComponent, LoadingComponent, DisplayBannerTopComponent, DisplayBannerBotComponent, DisplayBannerLeftComponent, DisplayBannerRightComponent, HomeTestComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    NgbCarouselModule,
  ]
})
export class ManagerAdminModule {
}
