import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/module/service/service-customer/address.service';
import { CategoryService } from 'src/app/module/service/service-customer/category.service';
import { ServiceCustomerService } from 'src/app/module/service/service-customer/service-customer.service';

@Component({
  selector: 'app-edit-post-customer',
  templateUrl: './edit-post-customer.component.html',
  styleUrls: ['./edit-post-customer.component.css']
})
export class EditPostCustomerComponent implements OnInit {

  refPost: FormGroup;
  id: number;
  province;
  district;
  category;

  provinces;
  districts;
  wards;
  categories;
  childCategories;
  status = [
    {
      "statusId": 2,
      "statusName": "Đợi duyệt"
    },
    {
      "statusId": 4,
      "statusName": "Thành công"
    },
    {
      "statusId": 5,
      "statusName": "Thất bại"
    }
  ];
  images;

  constructor(private _formBuilder: FormBuilder,
    private _serviceCustomer: ServiceCustomerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _addressService: AddressService,
    private _categoryService: CategoryService,
    private _toastr: ToastrService) { }

  ngOnInit(): void {

    this.formInit();

    this._addressService.findAllProvince().subscribe(data => {
      this.provinces = data;
    });

    this._categoryService.findAllCategory().subscribe(data => {
      this.categories = data;
    })

    this.id = this._activatedRoute.snapshot.params["id"];
    this._serviceCustomer.findPostById(this.id).subscribe(oldData => {
      // binding to form
      this.province = oldData.ward.district.province;
      this.district = oldData.ward.district;
      this.category = oldData.childCategory.category;
      this.images = oldData.imageSet;

      // set default status when update post
      if (oldData.status.statusId === 1 || oldData.status.statusId === 3 || oldData.status.statusId === 6) {
        oldData.status = this.status[0];
      }

      this.refPost.patchValue(oldData);

      this._addressService.findAllDistrictByProvinceId(this.province.provinceId).subscribe(data => {
        this.districts = data;
      });

      this._addressService.findAllWardByDistrictId(this.district.districtId).subscribe(data => {
        this.wards = data;
      });

      this._categoryService.findAllChildCategoryByCategoryId(this.category.categoryId).subscribe(data => {
        this.childCategories = data;
      });
    })
  }

  formInit() {
    this.refPost = this._formBuilder.group({
      postId: [""],
      posterName: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required]],
      title: ["", [Validators.required]],
      postType: ["", [Validators.required]],
      postDateTime: [""],
      enabled: [""],
      price: ["", [Validators.required]],
      description: ["", [Validators.required]],
      status: ["", [Validators.required]],
      childCategory: ["", [Validators.required]],
      ward: ["", [Validators.required]],
      user: [""],
      imageSet: [""]
    });
  }

  submitForm() {
    if (this.refPost.valid) {
      this._serviceCustomer.updatePost(this.id, this.refPost.value).subscribe(data => {
        this._router.navigateByUrl("/customer/post-list");
        this._toastr.success("Chỉnh sửa bài đăng thành công!", "Thành công!");
      }, error => {
        this._toastr.error("Đã có lỗi xảy ra!", "Lỗi!");
      })
    }
  }

  cancelUpdate() {
    this._router.navigateByUrl("/customer/post-list");
    this._toastr.warning("Hủy chỉnh sửa bài đăng!", "Hủy!");
  }

  onChangeProvince() {
    this._addressService.findAllDistrictByProvinceId(this.province.provinceId).subscribe(data => {
      this.districts = data;
      this._addressService.findAllWardByDistrictId(this.districts[0].districtId).subscribe(data => {
        this.wards = data;
        // set data to refPost => binding ward to form when change province
        this.refPost.value.ward = this.wards[0];
      })
    })
  }

  onChangeDistrict() {
    this._addressService.findAllWardByDistrictId(this.district.districtId).subscribe(data => {
      this.wards = data;
    })
  }

  onChangeCategory() {
    this._categoryService.findAllChildCategoryByCategoryId(this.category.categoryId).subscribe(data => {
      this.childCategories = data;
      this.refPost.value.childCategory = this.childCategories[0];
    })
  }

  compareProvinces(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.provinceId === o2.provinceId : o1 === o2;
  }

  compareDistricts(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.districtId === o2.districtId : o1 === o2;
  }

  compareWards(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.wardId === o2.wardId : o1 === o2;
  }

  compareStatus(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.statusId === o2.statusId : o1 === o2;
  }

  compareCategories(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.categoryId === o2.categoryId : o1 === o2;
  }

  compareChildCategories(o1: any, o2: any): boolean {
    return o1 && o2 ? o1.childCategoryId === o2.childCategoryId : o1 === o2;
  }

}
