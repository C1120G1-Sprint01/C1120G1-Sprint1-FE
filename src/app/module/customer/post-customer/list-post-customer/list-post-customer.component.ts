import { Component, OnInit } from '@angular/core';
import { ServiceCustomerService } from 'src/app/module/service/service-customer/service-customer.service';

@Component({
  selector: 'app-list-post-customer',
  templateUrl: './list-post-customer.component.html',
  styleUrls: ['./list-post-customer.component.css']
})
export class ListPostCustomerComponent implements OnInit {

  posts;
  username: string = "username";

  constructor(private _serviceCustomer: ServiceCustomerService) { }

  ngOnInit(): void {
    this.onList(0, this.username);
  }

  onList(page: number, username: string) {
    this._serviceCustomer.findAllPostByUsername(page, username).subscribe(data => {
      this.posts = data;
      console.log("List post", this.posts);
    }, error => {
      console.log("error");
    });
  }

}
