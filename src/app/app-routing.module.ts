import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListBannerManagerComponent} from './module/admin/manager-admin/banner-manager/list-banner-manager/list-banner-manager.component';
import {HomeTestComponent} from './module/admin/manager-admin/banner-manager/home-test/home-test.component';


const routes: Routes = [
  {
    path: 'admin',
    children: [
      {path: 'banner', component: ListBannerManagerComponent},
      {path: 'home', component: HomeTestComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
