import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./module/security/login/login.component";
import {ChatCustomerComponent} from './module/customer/chat-customer/chat-customer/chat-customer.component';


const routes: Routes = [
  {path: '', component: ChatCustomerComponent},
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
