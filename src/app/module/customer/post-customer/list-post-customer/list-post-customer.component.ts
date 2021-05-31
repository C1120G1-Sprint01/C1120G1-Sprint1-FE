import { Component, OnInit } from '@angular/core';
import { ServiceCustomerService } from 'src/app/module/service/service-customer/service-customer.service';

@Component({
  selector: 'app-list-post-customer',
  templateUrl: './list-post-customer.component.html',
  styleUrls: ['./list-post-customer.component.css']
})
export class ListPostCustomerComponent implements OnInit {

  posts;

  constructor(private _serviceCustomer: ServiceCustomerService) { }

  ngOnInit(): void {
    this.onList(0);
  }

  onList(page: number) {
    this._serviceCustomer.findAllPostByUsername(page).subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    }, error => {
      console.log("error");
    });
  }

}
