import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../model/Category";
import {ServiceAdminService} from "../../../service/service-admin/service-admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ChildCategory} from "../../../../model/ChildCategory";

@Component({
  selector: 'app-delete-child-category',
  templateUrl: './delete-child-category.component.html',
  styleUrls: ['./delete-child-category.component.css']
})
export class DeleteChildCategoryComponent implements OnInit {
  childCategoryDelete: ChildCategory;

  constructor(public serviceAdminService: ServiceAdminService,
              private active: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = this.active.snapshot.params['id'];

    this.serviceAdminService.getChildCategoryById(id).subscribe((data: ChildCategory) => {
      this.childCategoryDelete = data;
    })
  }
  deleteChildCategory(id: number) {
    this.serviceAdminService.deleteChildCategory(id).subscribe(data => {
      this.router.navigateByUrl('main-category/child-category');
      console.log('xóa thành công!');
    });
  }
}
