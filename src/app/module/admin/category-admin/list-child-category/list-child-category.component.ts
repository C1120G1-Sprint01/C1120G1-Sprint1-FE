import {Component, OnInit} from '@angular/core';
import {ChildCategory} from "../../../../model/ChildCategory";
import {ServiceAdminService} from "../../../service/service-admin/service-admin.service";

@Component({
  selector: 'app-list-child-category',
  templateUrl: './list-child-category.component.html',
  styleUrls: ['./list-child-category.component.css']
})
export class ListChildCategoryComponent implements OnInit {

  childCategoryList: ChildCategory[] = [];
  childCategoryName: '';
  categoryName: '';
  indexPagination: number = 1;
  totalPagination: number;
  listChildCategoryNotPagination: ChildCategory[] = [];

  constructor(private serviceAdminService: ServiceAdminService,) {
  }

  ngOnInit(): void {
    this.getDataChildCategory();
  }

  getDataChildCategory() {
    this.serviceAdminService.getAllChildCategory(0).subscribe(data => {
      console.log(data);
      this.childCategoryList = data;
    }, error => {
      console.log('lấy dữ liệu bị lỗi');
    });
  }

  getSearch() {
    console.log(this.childCategoryName);
    console.log(this.categoryName);
    this.serviceAdminService.getAllChildByChildNameAndName(this.childCategoryName, this.categoryName).subscribe(data => {
      console.log("search" + data);
      this.childCategoryList = data;
      // }
    });
  }

  // nextPage() {
  //   this.indexPagination = this.indexPagination + 1;
  //   if (this.indexPagination > this.totalPagination) {
  //     this.indexPagination = this.indexPagination - 1;
  //   }
  //   this.serviceAdminService.getAllChildCategory((this.indexPagination * 5) - 5).subscribe((data: ChildCategory[]) => {
  //     this.childCategoryList = data;
  //   })
  // }
  //
  // lastPage() {
  //   this.indexPagination = this.listChildCategoryNotPagination.length / 5;
  //   this.serviceAdminService.getAllChildCategory((this.indexPagination * 5) - 5).subscribe((data: ChildCategory[]) => {
  //     this.childCategoryList = data;
  //   })
  // }
  //
  // findPagination() {
  //   this.serviceAdminService.getAllChildCategory((this.indexPagination * 5) - 5).subscribe((data: ChildCategory[]) => {
  //     this.childCategoryList = data;
  //   })  }
  //
  // indexPaginationChange(value: number) {
  //   this.indexPagination = value;
  // }
  //
  // firstPage() {
  //   this.indexPagination = 1;
  //   this.ngOnInit();
  // }
  //
  // previousPage() {
  //   this.indexPagination = this.indexPagination - 1;
  //   if (this.indexPagination == 0) {
  //     this.indexPagination = 1;
  //     this.ngOnInit();
  //   } else {
  //     this.serviceAdminService.getAllChildCategory((this.indexPagination * 5) - 5).subscribe((data: ChildCategory[]) => {
  //       this.childCategoryList = data;
  //     })
  //   }
  // }
}

