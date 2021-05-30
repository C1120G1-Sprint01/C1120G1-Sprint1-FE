import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../model/Category';
import {ChildCategory} from '../../../../model/ChildCategory';
import {ServiceAdminService} from '../../../service/service-admin/service-admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categoryList: Category[] = [];
  constructor(private serviceAdminService: ServiceAdminService,
              private router: Router) { }

  ngOnInit(): void {

    this.getDataCategory();
  }

  getDataCategory() {
    this.serviceAdminService.getAllCategory().subscribe(data => {
      this.categoryList = data;
    }, error => {
      console.log('lấy dữ liệu bị lỗi');
    });
  }
}
