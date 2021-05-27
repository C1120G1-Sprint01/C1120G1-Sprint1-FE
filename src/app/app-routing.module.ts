import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminChatComponent} from './module/admin/admin-chat/admin-chat/admin-chat.component';
import {ListPostCustomerComponent} from './module/customer/post-customer/list-post-customer/list-post-customer.component';
import {CustomerModule} from './module/customer/customer.module';
import {AdminModule} from './module/admin/admin.module';

const routes: Routes = [
  {path: '', component: AdminChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomerModule, AdminModule, RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
