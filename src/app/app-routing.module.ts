import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainAdminComponent} from './module/admin/manager-admin/post-manager/main-admin/main-admin.component';
import {DetailAdminComponent} from './module/admin/manager-admin/post-manager/detail-admin/detail-admin.component';
import {ConfirmAdminComponent} from './module/admin/manager-admin/post-manager/confirm-admin/confirm-admin.component';
import {DeletePostAdminComponent} from './module/admin/manager-admin/post-manager/delete-post-admin/delete-post-admin.component';
import {WaitAdminComponent} from './module/admin/manager-admin/post-manager/wait-admin/wait-admin.component';
import {ListDetailComponent} from './module/admin/manager-admin/post-manager/list-detail/list-detail.component';
import {ListApproveComponent} from './module/admin/manager-admin/post-manager/list-approve/list-approve.component';
import {ListWaitComponent} from './module/admin/manager-admin/post-manager/list-wait/list-wait.component';
import {ConfirmWaitComponent} from './module/admin/manager-admin/post-manager/confirm-wait/confirm-wait.component';
import {DeleteWaitComponent} from './module/admin/manager-admin/post-manager/delete-wait/delete-wait.component';


const routes: Routes = [
  // {path: 'admin', redirectTo: 'admin/list', pathMatch: 'full'},
  {path: "admin", component: MainAdminComponent},
  {path: "admin/listDetail", component: ListDetailComponent},
  {path: "admin/listApprove", component: ListApproveComponent},
  {path: "admin/listDetail/:postId", component: DetailAdminComponent},
  {path: "admin/listApprove/approve/:postId", component: ConfirmAdminComponent},
  {path: "admin/listApprove/delete/:postId", component: DeletePostAdminComponent},
  {path: "admin/listApprove/wait/:postId", component: WaitAdminComponent},
  {path: "admin/listWait", component: ListWaitComponent},
  {path: "admin/listWait/approve/:postId", component: ConfirmWaitComponent},
  {path: "admin/listWait/delete/:postId", component: DeleteWaitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
