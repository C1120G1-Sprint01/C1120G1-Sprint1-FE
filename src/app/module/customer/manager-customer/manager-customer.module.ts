import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationCustomerComponent } from './information-customer/information-customer.component';
import { EditInformationCustomerComponent } from './edit-information-customer/edit-information-customer.component';
import { StatisticsCustomerComponent } from './statistics-customer/statistics-customer.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterCustomerComponent} from "./register-customer/register-customer.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({

  declarations: [InformationCustomerComponent, EditInformationCustomerComponent, StatisticsCustomerComponent,RegisterCustomerComponent,RegisterCustomerComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ManagerCustomerModule { }
