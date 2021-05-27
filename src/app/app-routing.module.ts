import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChatCustomerComponent} from './module/customer/chat-customer/chat-customer/chat-customer.component';


const routes: Routes = [
  {path: '', component: ChatCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
