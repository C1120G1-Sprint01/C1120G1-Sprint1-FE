import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../model/User";
import {Account} from "../../../../../model/Account";
import {Ward} from "../../../../../model/Ward";
import {ServiceAdminService} from "../../../../service/service-admin/service-admin.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-add-customer-manager',
  templateUrl: './add-customer-manager.component.html',
  styleUrls: ['./add-customer-manager.component.css']
})
export class AddCustomerManagerComponent implements OnInit {


  constructor(private serviceAdmin: ServiceAdminService,
              ) { }

  ngOnInit(): void {

  }


}
