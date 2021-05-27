import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatCustomerComponent} from './module/customer/chat-customer/chat-customer/chat-customer.component';
import {ViewPostCustomerComponent} from './module/customer/post-customer/view-post-customer/view-post-customer.component';

const routes: Routes = [
  {path: '', component: ChatCustomerComponent},
  {path: 'post/:id', component: ViewPostCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
