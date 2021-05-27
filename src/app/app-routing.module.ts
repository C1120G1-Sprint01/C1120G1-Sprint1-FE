import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListBannerManagerComponent} from './module/admin/manager-admin/banner-manager/list-banner-manager/list-banner-manager.component';


const routes: Routes = [
  {
    path: 'admin',
    children: [
      {path: 'banner', component: ListBannerManagerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
