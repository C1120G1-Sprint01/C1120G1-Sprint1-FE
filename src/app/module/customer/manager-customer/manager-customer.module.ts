import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationCustomerComponent } from './information-customer/information-customer.component';
import { EditInformationCustomerComponent } from './edit-information-customer/edit-information-customer.component';



@NgModule({
  declarations: [InformationCustomerComponent, EditInformationCustomerComponent],
  imports: [
    CommonModule
  ]
})
export class ManagerCustomerModule { }
