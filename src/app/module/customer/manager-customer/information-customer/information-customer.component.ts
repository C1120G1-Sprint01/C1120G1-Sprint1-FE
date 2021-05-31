import { Component, OnInit } from '@angular/core';
import {User} from "../../../../model/user/User";
import {ServiceCustomerService} from "../../../service/service-customer/service-customer.service";

@Component({
  selector: 'app-information-customer',
  templateUrl: './information-customer.component.html',
  styleUrls: ['./information-customer.component.css']
})
export class InformationCustomerComponent implements OnInit {

  public listUser:User[] = [];

  constructor(private serviceCustomerService: ServiceCustomerService) { }

  ngOnInit(): void {
    this.serviceCustomerService.getListUser().subscribe(data => {
      this.listUser = data;
    }, error => {
      console.log("Get "+error+" on getListUser()");
    });
  }

}
